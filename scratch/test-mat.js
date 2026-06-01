import { MedialAxisTransform } from '../src/medialAxis.js';
import { Vector2D } from '../src/utils/vector2d.js';

// Simple assertion framework
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
  console.log(`[PASS] ${message}`);
}

function assertNear(val, expected, epsilon = 1e-4, message = "") {
  if (Math.abs(val - expected) > epsilon) {
    throw new Error(`Assertion failed: ${message}. Expected close to ${expected}, got ${val}`);
  }
  console.log(`[PASS] ${message} (Value: ${val.toFixed(5)})`);
}

function runTests() {
  console.log("=== RUNNING MEDIAL AXIS TRANSFORM TEST SUITE ===\n");

  // TEST 1: Vector2D Math operations
  console.log("--- Test 1: Vector2D Basics ---");
  const v1 = new Vector2D(3, 4);
  assertNear(v1.length(), 5, 1e-9, "Vector length");
  const v2 = new Vector2D(1, 2);
  const v3 = v1.add(v2);
  assert(v3.x === 4 && v3.y === 6, "Vector addition");
  const v4 = v1.sub(v2);
  assert(v4.x === 2 && v4.y === 2, "Vector subtraction");
  assertNear(v1.normalize().length(), 1.0, 1e-9, "Normalized vector length is 1");
  console.log("");

  // TEST 2: Symmetric Square Polygon
  // A square oriented CCW from (0,0) to (10,10)
  console.log("--- Test 2: Symmetric Square Polygon ---");
  const square = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 10, y: 10 },
    { x: 0, y: 10 }
  ];

  const matSquare = new MedialAxisTransform(square);
  
  // Verify that the polygon vertices are oriented CCW and parsed correctly
  assert(matSquare.polygon.length === 4, "Square vertex count");
  assert(matSquare.polygon[0].x === 0 && matSquare.polygon[0].y === 0, "Vertex 0 starts at (0,0)");
  assert(matSquare.polygon[1].x === 10 && matSquare.polygon[1].y === 0, "Vertex 1 at (10,0)");

  // Let's test a medial point from a boundary base point
  // P = (5, 0) on the bottom edge, inward normal is (0, 1)
  // Ray goes from (5, 0) up along y-axis. The intersection point Q is (5, 10) on the top edge.
  // The medial point should be at the center of the square (5, 5) with a radius of 5.
  const P = new Vector2D(5, 0);
  const Q = new Vector2D(5, 10);
  const medialPoint = matSquare.computeMedialPoint(P, Q);
  assertNear(medialPoint.x, 5.0, 1e-4, "Medial point X coordinate");
  assertNear(medialPoint.y, 5.0, 1e-4, "Medial point Y coordinate");
  assertNear(medialPoint.radius, 5.0, 1e-4, "Medial point inscribed radius");

  // Test containment check for the centered ball
  assert(matSquare.containsBall(new Vector2D(5, 5), 5.0), "Inscribed center ball is inside");
  assert(!matSquare.containsBall(new Vector2D(5, 5), 5.1), "Larger ball is correctly flagged as outside");
  console.log("");

  // TEST 3: Structured skeleton and junction isolation
  console.log("--- Test 3: Structured Skeleton & Junction Points ---");
  // For a square, the medial axis consists of:
  // - Diagonal lines from the 4 corners merging at the center (5, 5).
  // - The center (5, 5) is the single junction point since it is equidistant to all 4 edges.
  // - The 4 corners are convex vertices (end points).
  const skeleton = matSquare.computeStructuredSkeleton(5);
  
  console.log(`Computed regular points count: ${skeleton.regularPoints.length}`);
  console.log(`Computed junction/end points count: ${skeleton.junctionPoints.length}`);
  
  // Verify that we found junction points
  assert(skeleton.junctionPoints.length > 0, "Identified junction/end points");
  
  // Find the junction point close to the center (5, 5)
  let foundCenterJunction = false;
  let foundEndPoints = 0;
  for (const jp of skeleton.junctionPoints) {
    if (Math.abs(jp.x - 5.0) < 0.1 && Math.abs(jp.y - 5.0) < 0.1) {
      foundCenterJunction = true;
    }
    if (jp.isEndPoint) {
      foundEndPoints++;
    }
  }
  assert(foundCenterJunction, "Found the central junction point near (5, 5)");
  assert(foundEndPoints === 4, "Found all 4 corner end points");
  console.log("");

  console.log("=== ALL TESTS PASSED SUCCESSFULLY ===");
}

runTests();
