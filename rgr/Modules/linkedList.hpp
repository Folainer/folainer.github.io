#ifndef __LINKED_LIST__
#define __LINKED_LIST__
#include "variables.hpp"
#include <stdlib.h>
#include <stdio.h>

extern Variables::Missile *initMissile(clock_t start, int x, int y, float angle);
extern Variables::Missile *addMissile(Variables::Missile *missiles, clock_t start, int x, int y, float angle);
extern Variables::Jet *initJet(clock_t start, int x, int y);
extern Variables::Jet *addJet(Variables::Jet *endJet, clock_t start, int x, int y);
extern Variables::Bomb *initBomb(float y);
extern Variables::Bomb *addBomb(Variables::Bomb *endBomb, float y);
extern void removeJet(Variables::Jet **jets, Variables::Jet *currentJet, Variables::Jet *prevJet);
extern void removeMissile(Variables::Missile **missiles, Variables::Missile *currentMissile, Variables::Missile *prevMissile);

#endif