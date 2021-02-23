import mysql.connector

mydb = mysql.connector.connect(
 host="localhost",
 user="root",
 password="root",
 database="wdv495",
 port="8889"
)


mycursor = mydb.cursor()

#select the database and the data and display in ascending order by last name
sql = "SELECT * FROM students ORDER BY lname"

mycursor.execute(sql)

myresult = mycursor.fetchall()

#loop that prints all rows of data
for x in myresult:
  print(x)
