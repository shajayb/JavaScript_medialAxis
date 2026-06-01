export class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector2D(this.x + v.x, this.y + v.y);
  }

  sub(v) {
    return new Vector2D(this.x - v.x, this.y - v.y);
  }

  scale(s) {
    return new Vector2D(this.x * s, this.y * s);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    // 2D cross product scalar (z-component of 3D cross product)
    return this.x * v.y - this.y * v.x;
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  normalize() {
    const len = this.length();
    return len > 1e-12 ? this.scale(1 / len) : new Vector2D(0, 0);
  }

  distSq(v) {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2;
  }

  dist(v) {
    return Math.sqrt(this.distSq(v));
  }
}
