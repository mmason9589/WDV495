import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="root",
  database="wdv495",
  port="8889"
)

#Database creation
#mycursor.execute("CREATE DATABASE mydatabase")

##table creation with a KEY
#mycursor.execute("CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(255), lname VARCHAR(255), school VARCHAR(255))")

#create user input
fname = input("Enter First Name: ")
lname = input("Enter Last Name: ")
school = input("Enter School: ")

mycursor = mydb.cursor()


#take user input and insert into database
sql = "INSERT INTO students (fname, lname, school) VALUES (%s, %s, %s)"
val = (fname, lname, school)
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
