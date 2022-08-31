#include <iostream>
#include <cmath>

using namespace std;

//Get Mean
float getMean(float arr[], int size) {
    float sum = 0;
    //Find sum
    for (int i = 0; i < size; i++)
        sum = sum + arr[i];
    float mean = sum / size;
    return mean;
}

//Get Standard Deviation
float getSd(float arr[], int size, float mean) {
    int v = 0;
    int var = 0;
    for (int i = 0; i < size; i++) {
        v = pow(arr[i] - mean, 2);
        var += v;
        //std::cout << "Value: " << arr[i] << "    variant: " << v << std::endl;
    }

    v = var / (size - 1);
    //Find standard deviation
    float sD = sqrt(v);
    //std::cout << "Variance: " << v << std::endl;
    return sD;
}

//Get Min
float getMin(float arr[], int n) {
    float res = arr[0];
    for (int i = 1; i < n; i++)
        res = min(res, arr[i]);
    return res;
}

//Get Max
float getMax(float arr[], int size) {
    float res = arr[0];
    for (int i = 1; i < size; i++)
        res = max(res, arr[i]);
    return res;
}

//Print functions
void mathOutput(float arr[], int size) {
    float mean = getMean(arr, size);
    float sD = getSd(arr, size, mean);
    float max = getMax(arr, size);
    float min = getMin(arr, size);
    float range = max - min;

    std::cout << "Mean: " << mean << std::endl;
    std::cout << "Standard Deviation: " << sD << std::endl;
    std::cout << "Range: " << range << std::endl;
};

int main() {
    //declare and set size of array
    float arr[10];
    float input;
    int size = sizeof(arr) / sizeof(arr[0]);
    //Determine size of array
    std::cout << "Enter numbers into the array" << std::endl;
    for (int i = 0; i < size; ++i) {
        std::cout << "Enter number: ";
        //loop through and enter user input.
        std::cin >> input;
        if(input) {
            arr[i] = input;
        } else {
            std::cout << "Error. " << std::endl;
            exit(EXIT_FAILURE);//
        }
    }
    mathOutput(arr, size);
    return 0;
}

