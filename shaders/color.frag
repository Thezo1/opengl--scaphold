#version 330

precision mediump float;

uniform vec2 resolution;
uniform vec4 color;
uniform vec2 seed;

in vec2 uv;
out vec4 out_color;

void main(void) {
    gl_FragDepth = length(gl_FragCoord.xy - seed)/length(resolution);    
    out_color = color;
}
