import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftAcademicComponent } from './shule-soft-academic.component';
import {ShuleSoftAcademicRoutingModule} from './shule-soft-academic-routing.module';
import { AcademicMenuComponent } from './academic-menu/academic-menu.component';
import {SharedModule} from "../../shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { SectionsComponent } from './sections/sections.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { ClassSubjectComponent } from './subjects/class-subject/class-subject.component';
import { SectionSubjectTeacherComponent } from './subjects/section-subject-teacher/section-subject-teacher.component';
import { DefaultGradingComponent } from './grading/default-grading/default-grading.component';
import { SpecialGradingComponent } from './grading/special-grading/special-grading.component';
import { SpecialGradingNameComponent } from './grading/special-grading-name/special-grading-name.component';
import { TermsComponent } from './terms/terms.component';
import { ExamGroupComponent } from './exams/settings/exam-group/exam-group.component';
import { SchoolExamsComponent } from './exams/settings/school-exams/school-exams.component';
import { ClassAllocationComponent } from './exams/settings/class-allocation/class-allocation.component';
import { ExamScheduleComponent } from './exams/exam-schedule/exam-schedule.component';
import { SingleReportComponent } from './exams/reports/single-report/single-report.component';
import { CombinedReportComponent } from './exams/reports/combined-report/combined-report.component';
import { CaReportComponent } from './exams/reports/ca-report/ca-report.component';
import { ReportsCreatedComponent } from './exams/reports/reports-created/reports-created.component';
import { StudentsCharactersComponent } from './exams/students-characters/students-characters.component';
import { MinorSchoolExamsComponent } from './exams/minor-school-exams/minor-school-exams.component';
import { CategoryComponent } from './character/category/category.component';
import { ListOfCharacterComponent } from './character/list-of-character/list-of-character.component';
import { CharacterGradeComponent } from './character/character-grade/character-grade.component';
import { GeneralAssessmentComponent } from './character/general-assessment/general-assessment.component';
import { ReportsComponent } from './character/reports/reports.component';
import { MarkComponent } from './mark/mark.component';



@NgModule({
  declarations: [
    ShuleSoftAcademicComponent,
    AcademicMenuComponent,
    DashboardComponent,
    ClassesComponent,
    SectionsComponent,
    SubjectListComponent,
    ClassSubjectComponent,
    SectionSubjectTeacherComponent,
    DefaultGradingComponent,
    SpecialGradingComponent,
    SpecialGradingNameComponent,
    TermsComponent,
    ExamGroupComponent,
    SchoolExamsComponent,
    ClassAllocationComponent,
    ExamScheduleComponent,
    SingleReportComponent,
    CombinedReportComponent,
    CaReportComponent,
    ReportsCreatedComponent,
    StudentsCharactersComponent,
    MinorSchoolExamsComponent,
    CategoryComponent,
    ListOfCharacterComponent,
    CharacterGradeComponent,
    GeneralAssessmentComponent,
    ReportsComponent,
    MarkComponent
  ],
  imports: [
    ShuleSoftAcademicRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftAcademicModule { }
