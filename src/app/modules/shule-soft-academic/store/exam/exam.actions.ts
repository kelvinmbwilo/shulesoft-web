import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Exam } from './exam.model';

export const getExams = createAction(
  '[Exam/API] Get Exams'
);

export const doneLoadingExams = createAction(
  '[Exam/API] Done Loading Exams'
);

export const failLoadingExams = createAction(
  '[Exam/API] Error Loading Exams',
  props<{ error: any }>()
);

export const setSelectedExam = createAction(
  '[Exam/API] Set Selected Exams',
  props<{ sharePeriodId: string }>()
);

export const loadExams = createAction(
  '[Exam/API] Load Exams',
  props<{ sharePeriods: Exam[] }>()
);

export const addExam = createAction(
  '[Exam/API] Add Exam',
  props<{ sharePeriod: Exam }>()
);

export const upsertExam = createAction(
  '[Exam/API] Upsert Exam',
  props<{ sharePeriod: Exam }>()
);

export const addExams = createAction(
  '[Exam/API] Add Exams',
  props<{ sharePeriods: Exam[] }>()
);

export const upsertExams = createAction(
  '[Exam/API] Upsert Exams',
  props<{ sharePeriods: Exam[] }>()
);

export const updateExam = createAction(
  '[Exam/API] Update Exam',
  props<{ sharePeriod: Update<Exam> }>()
);

export const updateExams = createAction(
  '[Exam/API] Update Exams',
  props<{ sharePeriods: Update<Exam>[] }>()
);

export const deleteExam = createAction(
  '[Exam/API] Delete Exam',
  props<{ id: string }>()
);

export const deleteExams = createAction(
  '[Exam/API] Delete Exams',
  props<{ ids: string[] }>()
);

export const clearExams = createAction(
  '[Exam/API] Clear Exams'
);
