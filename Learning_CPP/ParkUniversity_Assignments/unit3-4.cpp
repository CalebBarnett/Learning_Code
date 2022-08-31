#include <iostream>
#include "d_random.h"
#include "d_vector.h"
//Write Vector Template
template <typename T>
void writeMiniVector(const miniVector<T>& v)
{
    for (int i = 0; i < v.size(); i++)
        cout << v[i] << " ";
    cout << endl;
}
//Sort Vector Template
template <typename T>
void sortMiniVector(miniVector<T>& v)
{
    for (int i = 0; i < v.size() - 1; i++)
        for (int j = i + 1; j < v.size(); j++)
        {
            if (v[i] < v[j])
            {
                T temp = v[i];
                v[i] = v[j];
                v[j] = temp;
            }
        }
}

int main() {
    cout << "*** Starting Unit3-4 Program ***" << endl;
    // declaring miniVector Integer
    miniVector<int> v;
    // declaring random number generator
    randomNumber rndNum;
    //Generate and insert integers into vector
    for (int i = 0; i < 15; i++) {
        //Test Case. Uncomment for test, Comment for regular use
        int foo [15] = {59, 18, 60, 91, 49, 47, 83, 93, 55, 52, 15, 36, 83, 56, 91};
        v.push_back(foo[i]);
        //Uncomment for regular use.
        //v.push_back(rand() % 100);
    };
    //Call Arrays to write, sort, and write.
    cout << "Original: ";
    writeMiniVector(v);
    cout << "Sorted: ";
    sortMiniVector(v);
    writeMiniVector(v);

    system("PAUSE");
    return 0;
}
/*
Original: 59 18 60 91 49 47 83 93 55 52 15 36 83 56 91
Sorted: 93 91 91 83 83 60 59 56 55 52 49 47 36 18 15
 */


