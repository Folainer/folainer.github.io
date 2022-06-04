#ifndef __INTERFACE__
#define __INTERFACE__

#include <SFML/Graphics.hpp>
#include <stdio.h>
#include "variables.hpp"
#include "toString.hpp"

using namespace sf;
using namespace Variables;

extern void initInterface();
extern void drawInterface(RenderWindow &window, float a, int n);

#endif /* __INTERFACE__ */