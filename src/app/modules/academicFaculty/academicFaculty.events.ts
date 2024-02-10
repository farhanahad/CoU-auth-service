import { RedisClient } from '../../../shared/redis';
import {
  EVENT_ACADEMIC_FACULTY_CREATED,
  EVENT_ACADEMIC_FACULTY_DELETED,
  EVENT_ACADEMIC_FACULTY_UPDATED,
} from './academicFaculty.constants';
import {
  AcademicFacultyCreatedEvent,
  AcademicFacultyDeletedEvent,
  AcademicFacultyUpdatedEvent,
} from './academicFaculty.interfaces';
import { AcademicFacultyService } from './academicFaculty.service';

const initAcademicFacultyEvents = () => {
  RedisClient.subscribe(EVENT_ACADEMIC_FACULTY_CREATED, async (e: string) => {
    const data: AcademicFacultyCreatedEvent = JSON.parse(e);

    await AcademicFacultyService.insertIntoDBFromEvent(data);
    console.log('Post', data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_FACULTY_UPDATED, async (e: string) => {
    const data: AcademicFacultyUpdatedEvent = JSON.parse(e);

    await AcademicFacultyService.updateOneInDBFromEvent(data);
    console.log('Updated', data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_FACULTY_DELETED, async (e: string) => {
    const data: AcademicFacultyDeletedEvent = JSON.parse(e);

    await AcademicFacultyService.deleteOneFromDBFromEvent(data.id);
    console.log('Deleted', data);
  });
};

export default initAcademicFacultyEvents;
