#include <cstdlib>
#include <iostream>
#include <string>

using namespace std;
//AddressNode Structure
struct AddressNode {
    string name;
    AddressNode *next;
};

//ABook Class
class ABook {
private:
    AddressNode *topPtr;
public:
    ABook() {
        topPtr = NULL;
    }

    ~ABook();

    void Insert(string NewItem);

    void SortedInsert(string NewItem);

    void Remove(string &item);
};

ABook::~ABook() {
    while (topPtr != NULL) {
        AddressNode *newNode = topPtr->next;
        delete newNode;
        newNode = topPtr;
    }
}

void ABook::Insert(string NewItem) {
    AddressNode *newNode = new AddressNode;
    newNode->name = NewItem;
    newNode->next = topPtr;
    topPtr = newNode;
}

void ABook::SortedInsert(string NewItem) {
    AddressNode *newName;
    AddressNode *newNode = new AddressNode;
    newNode->name = NewItem;
    if (topPtr == NULL || topPtr->name.compare(NewItem) >= 0) {
        newNode->next = topPtr;
        topPtr = newNode;
    } else {
        newName = topPtr;
        while (newName->next != NULL && newName->next->name.compare(NewItem) < 0) {
            newName = newName->next;
        }
        newNode->next = newName->next;
        newName->next = newNode;
    }
}

void ABook::Remove(string &item) {
    if (topPtr != NULL) {
        item = topPtr->name;
        topPtr = topPtr->next;
    }
}

int main(int argc, char **argv) {
    ABook Book;
    string nameToRemove;
//Insert Elements
    Book.Insert("Precious");
    Book.SortedInsert("Eileen");
    Book.SortedInsert("Frank");
    Book.SortedInsert("Ken");
    cout << "Sorted List: " << endl;
//Remove Elements
    for (int i = 0; i < 4; i++) {
        Book.Remove(nameToRemove);
        cout << nameToRemove << endl;
    }
    system("PAUSE");
    return 0;
}
