#include <iostream>
using namespace std;

void inputData(string &myString) {
    //Declare variables
    int comma, fSpace, sSpace, myStringLength;
    string fullName, lastName, firstName, middleName, middleInt;
    //Get user input
    cout << "Please enter full name (Last, First Middle): ";
    getline(cin, myString);
    //Find lengths
    myStringLength = myString.length();
    comma = myString.find(",");
    fSpace = myString.find(" ") + 1;
    sSpace = myString.rfind(" ");
    //Extract Individual Names
    lastName = myString.substr(0, comma);
    firstName = myString.substr(fSpace, (sSpace - fSpace));
    middleName = myString.substr(sSpace, (myStringLength - sSpace));
    //Erase Middle Name and assign middle initial
    middleInt = middleName.erase(2);
    //Create full name and insert middle initial
    fullName = firstName + " " + lastName;
    fullName.insert(firstName.length(), middleInt);
    //assign myString
    myString = fullName;
}
void outputData(string myString) {
    cout << "New Format Name (First Middle Initial Last): " << myString << endl;
    system("PAUSE");
}
int main() {
    //Declare myString Variable
    string myString;
    //call-by-reference
    inputData(myString);
    //call-by-function
    outputData(myString);
    return 0;
}
