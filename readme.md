<h2>This is  university management related website. It's a backend part</h2>

<h2>Others part of this project</h2>
<h3>Core Service Link:https://github.com/farhanahad/CoU-core-service: </h3>
<h3>API Gateway link:https://github.com/farhanahad/CoU-api-gateway</h3>
<h3>Frontend Link: https://github.com/farhanahad/CoU-frontend</h3>

<p>At first git clone & then command "yarn add", Then set .env file. just see the format .env.example.. Then run " yarn start"</p>
<h2>Auth Login</h2>

<h4>Post</h4>
Post: http://localhost:5000/api/v1/auth/login
Input:
{
    "id":"A-00001",
    "password":"123456"
}

Got Access Token

<h3>If access token time finished,create another refresh token</h3>
Post: http://localhost:5000/api/v1/auth/refresh-token

Input:
{
"id":"A-00001",
"password":"123456"
}

Then authorization the token

<h2>Academic Semester Related API</h2>

<h4>1. Create</h4>
   Post: http://localhost:5000/api/v1/academic-semesters/create-semester

Input:
{
"title":"Summer",
"year":"2024",
"code":"02",
"startMonth":"January",
"endMonth":"June"
}

<h4>2. Read:</h4>

Get: http://localhost:5000/api/v1/academic-semesters

<h4>3. Searching(Partial match),Filtering(Exact Match)</h4>

Filtering:
i. http://localhost:5000/api/v1/academic-semesters/?sortBy=code&sortOrder=desc
ii. http://localhost:5000/api/v1/academic-semesters/?sortBy=year&sortOrder=desc
iii. http://localhost:5000/api/v1/academic-semesters/?title=Summer&year=2022
iv. http://localhost:5000/api/v1/academic-semesters/?page=1&limit=3
v. http://localhost:5000/api/v1/academic-semesters/?searchTerm=Autumn&page=1&limit=3

Searching:

i. Show fall session - http://localhost:5000/api/v1/academic-semesters/?searchTerm=Fa
ii.Show summer session - http://localhost:5000/api/v1/academic-semesters/?searchTerm=sum
iii. Matching code - http://localhost:5000/api/v1/academic-semesters/?searchTerm=02

<h4>4. Single id find:</h4>
   Get: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d603

<h4>5. If id is not valid,show cast error</h4>

Get: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d60

<h4>6. Not found route</h4>
   Get: http://localhost:5000/api/v1/xyz
   output:
   {
   "success": false,
   "message": "Not Found",
   "errorMessages": [
   {
   "path": "/api/v1/xyz",
   "message": "API Not Found"
   }
   ]
   }

<h4>7. Update:</h4>
   patch means single update and multiple update
   Patch: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d603
   Input:
   {
   "year":"2022",
   "title":"Summer",
   "code":"02"
   }

<h4>8. Delete:</h4>

delete: http://localhost:5000/api/v1/academic-semesters/64e9563a94a16bfd5d2fde32

<h2>Faculty Related API</h2>

<h4>1. Create</h4>
   Post : http://localhost:5000/api/v1/academic-faculties/create-faculty

Input:
{
"title":"Faculty Of Business Studies"
}

<h4>2. Read</h4>

Get: http://localhost:5000/api/v1/academic-faculties

<h4>3. Update</h4>

patch: http://localhost:5000/api/v1/academic-faculties/64ec3567ab6aa6061f2d4509
Input:
{
"title":"Faculty Of wXYZ"
}

<h4>4.Delete:</h4>
delete: http://localhost:5000/api/v1/academic-faculties/64ec3567ab6aa6061f2d4509

<h2>Department Related API's</h2>

<h4>1. Create</h4>

Post: http://localhost:5000/api/v1/academic-departments/create-department

{
"title":"ICT",
"academicFaculty":"64ec351fab6aa6061f2d4503"
}

<h4>2. Read</h4>
Get: http://localhost:5000/api/v1/academic-departments

<h2>User Related API's</h2>

<h4>1.  Create</h4>
    Post: http://localhost:5000/api/v1/users/create-student
    Input:
    {
    "password": "123456",

        "student": {
            "name": {
                "firstName": "Nurul",
                "lastName": "Ahad",
                "middleName": "Farhan"
            },
            "dateOfBirth": "28-06-2000",
            "gender": "male",
            "bloodGroup": "B+",
            "email": "user@gmail.com",
            "contactNo": "01622525752",
            "emergencyContactNo": "01600000000",
            "presentAddress": "CTG",
            "permanentAddress": "CTG",
            "academicFaculty": "64ec351fab6aa6061f2d4503",
            "academicDepartment": "64ecad27189182c0f60179f0",
            "academicSemester": "64ec1036ad28571ee4b02088",
            "guardian": {
                "fatherName": "MD.ABBU",
                "fatherOccupation": "Retired Teacher",
                "fatherContactNo": "01600000000",
                "motherName": "Mrs.Ammu",
                "motherOccupation": "Housewife",
                "motherContactNo": "01600000000",
                "address": "CTG"
            },
            "localGuardian": {
                "name": "Zahid Hasan",
                "occupation": "Service Holder",
                "contactNo": "01600000000",
                "address": "Dhaka"
            }

          }

    }

<h4>2. Read</h4>

    Get: http://localhost:5000/api/v1/students

<h2>User Faculty Related API:</h2>

<h4>1. Create</h4>
   Post: http://localhost:5000/api/v1/users/create-faculty
   Input:

{
"password": "123456",

    "faculty": {
        "name": {
            "firstName": "Rakibul",
            "lastName": "Hasan",
            "middleName": "Riyad"
        },
        "dateOfBirth": "28-06-2000",
        "gender": "male",
        "bloodGroup": "B+",
        "email": "user@gmail.com",
        "contactNo": "01600000000",
        "emergencyContactNo": "01600000000",
        "presentAddress": "CTG",
        "permanentAddress": "CTG",
        "academicDepartment": "64ecad27189182c0f60179f0",
        "designation":"Lecturer",
        "academicFaculty": "64ec351fab6aa6061f2d4503"

    }

}

<h4>2. Read</h4>
   Get: http://localhost:5000/api/v1/faculties

<h2>Management Department Related API</h2>

<h4>1. Create</h4>
   Post: http://localhost:5000/api/v1/managementDepartments/create-department

{
"title": "Account Management"
}

<h4>2. Read</h4>
   Get: http://localhost:5000/api/v1/managementDepartments

<h2>Admin Related API</h2>

<h4>1. Create</h4>
   Post:http://localhost:5000/api/v1/users/create-admin

Input:
{
"password": "123456",

    "admin": {
        "name": {
            "firstName": "Tofael",
            "lastName": "Ahmed",
            "middleName": ""
        },
        "dateOfBirth": "28-06-1980",
        "gender": "male",
        "bloodGroup": "B+",
        "email": "user@gmail.com",
        "contactNo": "01600000000",
        "emergencyContactNo": "01600000000",
        "presentAddress": "CTG",
        "permanentAddress": "CTG",
        "managementDepartment": "64ed6f870a8eb3fb6ed2e5b8",
        "designation":"HR",
        "profileImage": "DEMO LINK OF IMAGE"

    }

}

<h4>2. Read:</h4>
   Get: http://localhost:5000/api/v1/admins

<h2>Password Change Related API's Endpoint</h2>

<h4>Firstly login user</h4>

Post: http://localhost:5000/api/v1/auth/login
Input:
{
"id":"280100001",
"password":"12345678"
}

Then,
Post: http://localhost:5000/api/v1/auth/change-password

{
"oldPassword":"123456",
"newPassword":"12345678"
}
