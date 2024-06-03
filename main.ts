#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

interface Students {
  name: string;
  fatherName: string;
  age: number;
  studentId: number; balance: number;
  feesPaid?: number[];
  enrolledCourse?: string[];
}
class StudentManagementSystem {
  manageStudent: Students[] = [];

  public async addStudents(name: string, fatherName: string, age: number) {
    let balance = 20000;
    const digits = '987654321';
    let studentId: string = ''
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * digits.length);
      studentId += digits[index];
    }
    if (!isNaN(age)) {
      this.manageStudent.push({
        name: name,
        fatherName: fatherName,
        age: age,
        studentId: Number(studentId),
        balance: balance,
      });
      console.log(
        `${chalk.yellow(
          "Student Info added successdully"
        )}\nname: ${name}\nfather name: ${fatherName}\nage: ${age}\nstudent id: ${studentId}\nbalance:${balance}`
      );
    } else {
      console.log(chalk.red("Please enter valid age"));
    }
  }
  public async showStudents() {
    if (this.manageStudent.length !== 0) {
      this.manageStudent.forEach((studentInfo) =>
        console.log(
          chalk.yellow(
            `name: ${studentInfo.name}\nfather name: ${studentInfo.fatherName}\nage: ${studentInfo.age}\nstudent id: ${studentInfo.studentId}\nbalance: ${studentInfo.balance}`
          )
        )
      );
    } else {
      console.log(chalk.red("please add student info first"));
    }
  }
  public async deleteStudents() {
    if (this.manageStudent.length !== 0) {
      let getStudentId = await inquirer.prompt({
        name: "id",
        message: chalk.bold("Enter student id to delete"),
        type: "number",
      });
      let isId = true;
      let student = this.manageStudent.find((student: Students) => {
        if (student.studentId === getStudentId.id && !isNaN(getStudentId.id)) {
          isId = false;
          return student;
        }
      }) as Students;
      if (student?.studentId == getStudentId.id && !isId) {
        console.log(chalk.yellow(`student info deleted successfully`));
        this.manageStudent.splice(this.manageStudent.indexOf(student), 1);
      } else {
        console.log(chalk.red("Please enter valid id"));
      }
    } else {
      console.log(chalk.red("please add student info first "));
    }
  }
  public async manageEnrollments() {
    if (this.manageStudent.length !== 0) {
      let getId = await inquirer.prompt({
        name: "id",
        message: chalk.bold("Enter satudent id to enroll"),
        type: "number",
      });
      let isId = true;
      let student = this.manageStudent.find((student: Students) => {
        if (student.studentId === getId.id && !isNaN(getId.id)) {
          isId = false;
          return student;
        }
      }) as Students;
      if (student?.studentId == getId.id && !isId) {
        let selectCourses = await inquirer.prompt([
          {
            name: "options",
            message: chalk.bold("Select your course"),
            type: "list",
            choices: [
              chalk.bold("TypeScript\nRs:6000"),
              chalk.bold("Python\nRs:9000"),
              chalk.bold("C++\nRs:6000"),
              chalk.bold("Java\nRs:1000"),
              chalk.bold("JavaScript\nRs:10000"),
              chalk.bold("Nextjs\nRs:15000"),
              chalk.bold("Back"),
            ],
          },
        ]);
        switch (selectCourses.options) {
          case chalk.bold("TypeScript\nRs:6000"):
            if (student.enrolledCourse?.includes("TypeScript") !== true) {
              if (student.balance > 6000) {
                student.balance -= 6000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "TypeScript Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "3 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "500"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["TypeScript"];
                } else {
                  if (student.enrolledCourse?.includes("TypeScript") !== true) {
                    student.enrolledCourse?.push("TypeScript");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("Python\nRs:9000"):
            if (student.enrolledCourse?.includes("Python") !== true) {
              if (student.balance > 9000) {
                student.balance -= 9000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "Python Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "2 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "800"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["Python"];
                } else {
                  if (student.enrolledCourse?.includes("Python") !== true) {
                    student.enrolledCourse?.push("Python");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("C++\nRs:6000"):
            if (student.enrolledCourse?.includes("C++") !== true) {
              if (student.balance > 6000) {
                student.balance -= 6000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "C++ Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "3 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "900"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["C++"];
                } else {
                  if (student.enrolledCourse?.includes("C++") !== true) {
                    student.enrolledCourse?.push("C++");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("Java\nRs:1000"):
            if (student.enrolledCourse?.includes("Java") !== true) {
              if (student.balance > 1000) {
                student.balance -= 1000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "Java Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "2 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "1000"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["Java"];
                } else {
                  if (student.enrolledCourse?.includes("Java") !== true) {
                    student.enrolledCourse?.push("Java");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("JavaScript\nRs:10000"):
            if (student.enrolledCourse?.includes("JavaScript") !== true) {
              if (student.balance > 10000) {
                student.balance -= 10000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "JavaScript Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "3 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "1100"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["JavaScript"];
                } else {
                  if (student.enrolledCourse?.includes("JavaScript") !== true) {
                    student.enrolledCourse?.push("JavaScript");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("Nextjs\nRs:15000"):
            if (student.enrolledCourse?.includes("Nextjs") !== true) {
              if (student.balance > 15000) {
                student.balance -= 15000;
                console.log(
                  chalk.bold(
                    `congrats now your enrolled in ${chalk.yellow(
                      "Nextjs Course"
                    )}\ncourse duration: ${chalk.yellow(
                      "4 Months"
                    )}\nCourse charges: ${chalk.yellow(
                      "1500"
                    )}\nremaining balance: ${chalk.yellow(student.balance)}`
                  )
                );
                if (student.hasOwnProperty("enrolledCourse") !== true) {
                  student.enrolledCourse = ["Nextjs"];
                } else {
                  if (student.enrolledCourse?.includes("Nextjs") !== true) {
                    student.enrolledCourse?.push("Nextjs");
                  }
                }
              } else {
                console.log(chalk.red("insufficiant balance "));
              }
            } else {
              console.log(chalk.red("You are already enrolled in this course"));
            }
            break;
          case chalk.bold("Back"):
            break;
          default:
            break;
        }
      } else {
        console.log(chalk.red("Please enter valid id"));
      }
    } else {
      console.log(chalk.red("please add student info first"));
    }
  }
  public async addBalance() {
    if (this.manageStudent.length !== 0) {
      let getId = await inquirer.prompt({
        name: "id",
        message: chalk.bold("Enter student id to add balance"),
        type: "number",
      });
      let isId = true;
      let student = this.manageStudent.find((student: Students) => {
        if (student.studentId === getId.id && !isNaN(getId.id)) {
          isId = false;
          return student;
        }
      }) as Students;
      if (student?.studentId == getId.id && !isId) {
        let getAmount = await inquirer.prompt({
          name: "amount",
          message: chalk.bold("Enter amount"),
          type: "number",
        });
        if (!isNaN(getAmount.amount)) {
          student.balance += getAmount.amount;
          console.log(
            chalk.bold(
              `Amount ${chalk.yellow(
                getAmount.amount
              )} added successfully\ncurrent balance is: ${chalk.yellow(
                student.balance
              )}`
            )
          );
        } else {
          console.log(chalk.red("Please enter valid id"));
        }
      } else {
        console.log(chalk.red("Please enter valid amount"));
      }
    } else {
      console.log(chalk.red("please add student info first"));
    }
  }
  public async payDues() {
    if (this.manageStudent.length !== 0) {
      let getId = await inquirer.prompt({
        name: "id",
        message: chalk.bold("Enter student id to pay fees"),
        type: "number",
      });
      let isId = true;
      let student = this.manageStudent.find((student: Students) => {
        if (student.studentId === getId.id && !isNaN(getId.id)) {
          isId = false;
          return student;
        }
      }) as Students;
      if (student?.studentId == getId.id && !isId) {
        let getFess: any = await inquirer.prompt({
          name: "fees",
          message: chalk.bold("Enter amount you want to pay"),
          type: "number",
        });
        if (!isNaN(getFess.fees)) {
          if (Object.keys(student).includes("feesPaid") !== true) {
            student.feesPaid = [getFess.fees];
          } else {
            student.feesPaid?.push(getFess.fees);
          }
          console.log(
            chalk.bold(
              `Fess paid ${chalk.yellow(
                getFess.fees
              )} successfully\nCurrent fees paid: ${chalk.yellow(
                student.feesPaid
              )}`
            )
          );
        } else {
          console.log(chalk.red("Please enter valid amount"));
        }
      } else {
        console.log(chalk.red("Please enter valid id"));
      }
    } else {
      console.log(chalk.red("please add student info first"));
    }
  }
  public async showStatus() {
    if (this.manageStudent.length !== 0) {
      let getId = await inquirer.prompt({
        name: "id",
        message: chalk.bold("Enter student id to check status"),
        type: "number",
      });
      let isId = true;
      let student: any = this.manageStudent.find((student: Students) => {
        if (student.studentId === getId.id && !isNaN(getId.id)) {
          isId = false;
          return student;
        }
      }) as Students;
      if (student?.studentId == getId.id && !isId) {
        for (let key in student) {
          console.log(`${key}: ${chalk.yellow(student[key])}`);
        }
      } else {
        console.log(chalk.red("Please enter valid id"));
      }
    } else {
      console.log(chalk.red("please add student info first"));
    }
  }
  public async main() {
    let flage = true;
    while (flage) {
      let choice = await inquirer.prompt([
        {
          name: "choice",
          message: chalk.yellow("Select your desired option"),
          type: "list",
          choices: [
            chalk.bold("Add student info"),
            chalk.bold("View all students"),
            chalk.bold("Delete student info"),
            chalk.bold("Enrollment"),
            chalk.bold("Add balance"),
            chalk.bold("Pay student fees"),
            chalk.bold("Show student status"),
            chalk.bold("Quit"),
          ],
        },
      ]);
      switch (choice.choice) {
        case chalk.bold("Add student info"):
          let getStudentInfo = await inquirer.prompt([
            {
              name: "name",
              message: chalk.bold("Enter student name"),
              type: "input",
            },
            {
              name: "fatherName",
              message: chalk.bold("Enter student father name"),
              type: "input",
            },
            {
              name: "age",
              message: chalk.bold("Enter student age"),
              type: "number",
            },
          ]);
          await this.addStudents(
            getStudentInfo.name,
            getStudentInfo.fatherName,
            getStudentInfo.age
          );
          break;
        case chalk.bold("View all students"):
          this.showStudents();
          break;
        case chalk.bold("Delete student info"):
          await this.deleteStudents();
          break;
        case chalk.bold("Enrollment"):
          await this.manageEnrollments();
          break;
        case chalk.bold("Add balance"):
          await this.addBalance();
          break;
        case chalk.bold("Pay student fees"):
          await this.payDues();
          break;
        case chalk.bold("Show student status"):
          await this.showStatus();
          break;
        case chalk.bold("Quit"):
          flage = false;
          break;
        default:
          break;
      }
    }
  }
}
let student: StudentManagementSystem = new StudentManagementSystem();
student.main();