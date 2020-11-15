precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    float f = 0.01 / abs(length(p) - .5);
    gl_FragColor = vec4(vec3(f), 1.0);
}
