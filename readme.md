# _Wk. 3 - Thursday Work_

#### _A roman numberal converter and cryptosquare encoder_

#### By _**Brandon B. & Renee Sarley.**_

## Description

_Epicodus' assignment to convert normal numbers to roman numerals with attention to behavior-driven development. Should take in user's input and return it properly reformatted._

## Rules
* _The program will take a numerical value less than 4 and multiply it by 'I'._
* _If there are four I's turn into a IV_
* _If there is a 9, replace with IX_
* _If there are five of the same character, replace with the corresponding roman numeral_

## Expected Behaviors

|Behavior  |     Input     | Output|
|:----------:|:-------------:|:------:|
| Converts 1's to I | 3 | III |
| Converts 10's to X | 30  | XXX |
| Converts 100's to C  | 300 | CCC |
| Convert 1000's to M | 3000 | MMM |
| If user inputs an exact roman number (1, 5, 10, 50, 100, 500, 1000), only output corresponding roman numeral | 50 | L |
| If there are 5 in a row of the same, ie. 5, 50, 500, convert to corresponding roman numberal | XXXXX | L |
| If there are more than three of the same, convert to one greater, but keep one in the front. | 4 | IV |

|Behavior  |     Input     | Output|
|:----------:|:-------------:|:------:|
| Remove spaces | I'm here | I'mhere |
| Remove punctuation | I'm here  | Imhere|
| Downcase the input | I'm here| imhere |
| Count characters | I'm here| 6 |
| Determine row and column count | 6 | 3x2 |
| determine new position of each character| |  |
| Show user coded message| |  |



## Setup/Installation Requirements

* _run a terminal_
* _$ git clone the repository_
* _navigate to newly created local directory_
* _run the index.html through a web browser_
* _fill out the field for displayed form_
* _click form through the submit button_

## Known Bugs

_placeholder_

## Support and contact details

_placeholder_

## Technologies Used

_Basic HTML, CSS, and JavaScript, with CDN to Bootstrap 4.0 and jQuery 3.3.1 libraries_

Copyright (c) 2018
