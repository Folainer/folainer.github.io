
#include "linkedList.hpp"

using Variables::angle;
using Variables::Bomb;
using Variables::Jet;
using Variables::Missile;

//ініціалізація ракети
Missile *initMissile(clock_t start, int x, int y, float angle)
{
    Missile *root = (Missile *)malloc(sizeof(Missile));
    root->existTime = start;
    root->x = x;
    root->y = y;
    root->angle = angle;
    root->link = NULL;
    return root;
}

//створення ракети
Missile *addMissile(Missile *missiles, clock_t start, int x, int y, float angle)
{
    Missile *missile = (Missile *)malloc(sizeof(Missile));
    Missile *current = missiles;
    while (current->link != NULL)
    {

        current = current->link;
    }
    current->link = missile;
    missile->link = NULL;
    missile->existTime = start;
    missile->x = x;
    missile->y = y;
    missile->angle = angle;
    return missile;
}

//ініціалізація винищувача
Jet *initJet(clock_t start, int x, int y)
{
    Jet *root = (Jet *)malloc(sizeof(Jet));
    root->x = x;
    root->y = y;
    root->existTime = start;
    root->link = NULL;
    return root;
}

//додовання винищувача
Jet *addJet(Jet *endJet, clock_t start, int x, int y)
{
    Jet *jet = (Jet *)malloc(sizeof(Jet));
    endJet->link = jet;
    jet->link = NULL;
    jet->existTime = start;
    jet->x = x;
    jet->y = y;
    return jet;
}

//ініціалізація бомби
Bomb *initBomb(float y)
{
    Bomb *root = (Bomb *)malloc(sizeof(Bomb));
    root->y = y;
    root->link = NULL;
    return root;
}

//додовання бомби
Bomb *addBomb(Bomb *endBomb, float y)
{
    Bomb *bomb = (Bomb *)malloc(sizeof(Bomb));
    endBomb->link = bomb;
    bomb->link = NULL;
    bomb->y = y;
    return bomb;
}

//видалення винищувача
void removeJet(Jet **jets, Jet *currentJet, Jet *prevJet)
{
    if (prevJet == NULL)
    {
        free(currentJet);
        *jets = currentJet->link;
    }
    else
    {
        prevJet->link = currentJet->link;
        free(currentJet);
    }
}

//видалення ракети
void removeMissile(Missile **missiles, Missile *currentMissile, Missile *prevMissile)
{
    if (prevMissile == NULL)
    {
        free(currentMissile);
        *missiles = currentMissile->link;
    }
    else
    {
        prevMissile->link = currentMissile->link;
        free(currentMissile);
    }
}