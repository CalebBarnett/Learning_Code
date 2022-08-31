import sys
script, input_encoding, error = sys.argv


def main(language_file, encoding, errors): #Passing in 3 arguments
    line = language_file.readline() #Reads one line of the language.txt file passed in as Language_File

    if line: #if line is true drop to line 9&10
        print_line(line, encoding, errors) #
        return main(language_file, encoding, errors)


def print_line(line, encoding, errors): # Encodes each line of languages.txt
    next_lang = line.strip() #Strips the new line
    raw_bytes = next_lang.encode(encoding, errors=errors)
    cooked_string = raw_bytes.decode(encoding, errors=errors)

    print(raw_bytes, "<===>", cooked_string)


languages = open("languages.txt", encoding="utf-8")

main(languages, input_encoding, error)
