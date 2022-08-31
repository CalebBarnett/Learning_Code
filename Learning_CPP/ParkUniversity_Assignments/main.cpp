#include <iostream>
#include <vector>
#include <list>

using namespace std;

int main() {
    std::cout << "Hello, World!" << std::endl;

    int arr[] = {5, 9, 2, 7};
    int arrSize = sizeof(arr)/sizeof(int);
    list alist(arr, arr+arrSize);
    alist.pop_front();
    alist.pop_back();
    alist.pop_front();
    alist.push_front(7);
    alist.back() = alist.front();
    writeList(alist);

    //    Output: ______ ______

    return 0;
}
