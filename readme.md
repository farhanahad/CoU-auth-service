<h2>Academic Semester Related API</h2>

1. Create
   Post: http://localhost:5000/api/v1/academic-semesters/create-semester

Input:
{
"title":"Summer",
"year":"2024",
"code":"02",
"startMonth":"January",
"endMonth":"June"
}

2. Read:

Get: http://localhost:5000/api/v1/academic-semesters

3. Searching(Partial match),Filtering(Exact Match)

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

4. Single id find:
   Get: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d603

5. If id is not valid,show cast error

Get: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d60

6. Not found route
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

7. Update:
   patch means single update and multiple update
   Patch: http://localhost:5000/api/v1/academic-semesters/64e95e5a707b1c710b35d603
   Input:
   {
   "year":"2022",
   "title":"Summer",
   "code":"02"
   }

8. Delete:

delete: http://localhost:5000/api/v1/academic-semesters/64e9563a94a16bfd5d2fde32

<h2>Faculty Related API</h2>

1. Create
   Post : http://localhost:5000/api/v1/academic-faculties/create-faculty

Input:
{
"title":"Faculty Of Business Studies"
}

2. Read

Get: http://localhost:5000/api/v1/academic-faculties

3. Update

patch: http://localhost:5000/api/v1/academic-faculties/64ec3567ab6aa6061f2d4509
Input:
{
"title":"Faculty Of wXYZ"
}

4.Delete:
delete: http://localhost:5000/api/v1/academic-faculties/64ec3567ab6aa6061f2d4509

<h2>Department Related API's</h2>

1. Create

Post: http://localhost:5000/api/v1/academic-departments/create-department

{
"title":"ICT",
"academicFaculty":"64ec351fab6aa6061f2d4503"
}

2. Get: http://localhost:5000/api/v1/academic-departments

<h2>User Related API's</h2>

1.  Create
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

2.  Read:
    Get: http://localhost:5000/api/v1/students

<h2>User Faculty Related API:</h2>

1. Create
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

2. Read
   Get: http://localhost:5000/api/v1/faculties

Management Department Related API

1. Create
   Post: http://localhost:5000/api/v1/managementDepartments/create-department

{
"title": "Account Management"
}

2. Read
   Get: http://localhost:5000/api/v1/managementDepartments

<h2>Admin Related API</h2>

1. Create
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

2. Read:
   Get: http://localhost:5000/api/v1/admins

Transaction means multiple operation ke 1 ta unit hisebe chinta kora
Rollback hocche ager obosthay firaia niya jaoa, atm booth theke tk kata
