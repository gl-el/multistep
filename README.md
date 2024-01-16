# Multistep form (React/TS)

This app is made to practice working with forms based on this [test task](https://github.com/FrontCloudCamp/test-assignment). User should fill all fields with the form step by step. All form fields are validated and if something doesn't filled correctly user-friendly error messages are displayed.

My goal was to practise react hook form with yup for validation. Also I practised building app using MUI according to [design](https://www.figma.com/file/rzIp6awR6dGFVrcxcCEwzD/FrontCloudCamp?type=design&node-id=0-1&mode=design&t=EiFSV9KIeS906svY-0) in Figma. 

## [Live demo](https://multistep-ten.vercel.app/)

<img width="700px" alt="image" src="https://github.com/gl-el/multistep/assets/118758307/8cd2a7de-3cc8-48d0-ac54-962d63b0acef" />

## Features
- [x] Field validation according to the rule set:
   <details>
    <summary>Rules</summary>
  
  - ***nickname***: string, 30 symbols max, only letters and digits are allowed;
  - ***name***: string, 50 symbols max, only letters are allowed;
  - ***surname***: string, 50 symbols max, only letters are allowed;
  - ***phone***: string, masked to the +7 (900) 000-00-00 format;
  - ***email***: valid email format;
  - ***sex***: man or woman variants;
  - ***advantages*** array of strings;
  - ***radio***: number;
  - ***checkbox***: array of numbers;
  - ***about***: string, 200 symbols max without spaces;
  </details>
- [x] Phone input field is masked;
- [x] Responsive layout;
- [x] Field values are saved between steps until the form submission;
- [x] Modal window with the result of form submission;

## Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-516391?style=for-the-badge&logo=reacthookform&logoColor=white&labelColor=ec5990)
![YUP](https://img.shields.io/badge/YUP-gray?style=for-the-badge&logo=yup&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-black?style=for-the-badge&logo=mui)
![React Router](https://img.shields.io/badge/React%20Router-%23383838?style=for-the-badge&logo=reactrouter&logoColor=red)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)


## How to run locally

* install dependencies
```cli
npm install
```

* start local server via Vite
```cli
npm run dev
```
