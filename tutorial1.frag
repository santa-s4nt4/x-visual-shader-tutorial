precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    vec3 destColor = vec3(0.);
    for(float i = 0.; i < 5. ; i++) {
        float j = i + 1.;
        vec2 q = p + vec2(cos(time * j), sin(time * j)) * .5;
        destColor += 0.05 / length(q);
    }
    gl_FragColor = vec4(destColor, 1.);
}
