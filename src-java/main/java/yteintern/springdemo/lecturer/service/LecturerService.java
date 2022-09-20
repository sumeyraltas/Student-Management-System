package yteintern.springdemo.lecturer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.lecturer.entity.Lecturer;
import yteintern.springdemo.lecturer.repository.LecturerRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LecturerService {
    private final LecturerRepository lecturerRepository;

    public Response addLecturer( Lecturer lecturer) {

        lecturerRepository.save(lecturer);
        return new Response(ResponseType.SUCCESS, "SUCCESS","Lecturer");
    }

    public List< Lecturer> getAllLecturer() {
        return lecturerRepository.findAll();
    }

    public  Lecturer getById(Long id) {

        return lecturerRepository.findById(id)
                .orElseThrow(() -> (new EntityNotFoundException("No record")));

    }

    public Response updateLecturer (Long id,  Lecturer updatelecturer) {

        Lecturer lecturer = lecturerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));
        lecturer.update(updatelecturer);
        lecturerRepository.save(lecturer);
        return new Response(ResponseType.SUCCESS, "Updated","Lecturer");

    }

    public Response deleteLecturer(Long id) {
        lecturerRepository.deleteById(id);
        return new Response(ResponseType.SUCCESS, "Deleted","Lecturer");

    }
}
