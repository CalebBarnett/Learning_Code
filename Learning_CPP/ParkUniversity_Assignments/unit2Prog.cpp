/*
 * Program receives, sums by recursion, and returns non-negative integer.
 */
#include <iostream>
using namespace std;

int sumDigits(int &n, int &sum) {
    if (n/10 != 0)
    {
        sum = sum + n % 10;
        n = n/10;
        return sumDigits(n,sum);
    } else //(n/10 == 0)
    {
        sum = sum + n;
        n = sum;
        return n;
    }
}

int main() {
    int n;
    int sum = 0;
    //Ask for input (non-negative)
    cout << "Please enter non-negative integer: ";
    cin >> n;
    //Pass-by-reference and call sumDigits
    sum = sumDigits(n, sum);
    //Receive result back from sumDigits
    cout << "Sum of non-negative integers after recursion: " << sum << std::endl;
    //System Pause
    system("PAUSE");
    return 0;
}
