#include <iostream>

int fun(int n) {
    if (n == 4)
            //std::cout << n;
            return 2;
    else
            return 2*fun(n+1);
            //std::cout << n;
    }


int main() {
    std::cout << "Hello, World!" << std::endl;
    std::cout << fun(2);
    return 0;
}
