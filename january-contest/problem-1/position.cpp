#include <bits/stdc++.h>
using namespace std;

int main() {
    fstream file;
    file.open("initial-string.txt");
    string s;
    file >> s;
    for (int n = 0; n < s.length(); n++) {
        if (s[n] == '2' && s[n+1] == '0' && s[n+2] == '2' && s[n+3] == '3') {
            cout << n;
        }
    }
}