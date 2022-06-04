#include "function.hpp"
void drawFunction(RenderWindow &window, float a, int n)
{
    VertexArray lines(LineStrip, n * 10 * 360);
    for (int f = 0; f < n * 10 * 360; f++)
    {
        float r = a * exp((cos(a / PI) / (float)sin(a / PI)) * f / 10.f) / scales[scaleIndex];
        lines[ceil(f)].position = Vector2f(r * cos(f / 10.f / PI) + screenWidth / 2.f, r * sin(f / 10.f / PI) + screenHeight / 2.f);
        lines[ceil(f)].color = Color(255, 0, 0);
    }

    window.draw(lines);
}