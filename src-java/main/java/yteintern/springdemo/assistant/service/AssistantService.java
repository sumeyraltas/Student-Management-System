package yteintern.springdemo.assistant.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import yteintern.springdemo.Response;
import yteintern.springdemo.ResponseType;
import yteintern.springdemo.assistant.entity.Assistant;
import yteintern.springdemo.assistant.repository.AssistantRepository;
import yteintern.springdemo.lecturer.entity.Lecturer;
import yteintern.springdemo.lecturer.service.LecturerService;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AssistantService {

    private final AssistantRepository assistantRepository;
    private final LecturerService lecturerService;


    public Response addAssistant(Assistant assistant) {

        Lecturer lecturer  = lecturerService.getById(assistant.getLecturer().getId());
        assistant.setLecturer(lecturer);

        assistantRepository.save(assistant);

        return new Response(ResponseType.SUCCESS, "SUCCESS","Assistant");
    }

    public Response updateAssistant(Long id, Assistant updateAssistant) {
        Assistant assistant = assistantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));

        Lecturer lecturer = lecturerService.getById(assistant.getLecturer().getId());
        assistant.setLecturer(lecturer);

        assistant.update(updateAssistant);

        assistantRepository.save(assistant);

        return new Response(ResponseType.SUCCESS, "SUCCESS","Assistant");
    }
    public Assistant getAssistantById(Long id) {
        return assistantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));
    }

    public List<Assistant> getAllAssistant() {
        return assistantRepository.findAll();
    }

    public Assistant getById(Long id) {
        return assistantRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));
    }

    public Response deleteAssistantById(Long id){
        assistantRepository.deleteById(id);
        return new Response(ResponseType.SUCCESS, "DELETED","Assistant");
    }


    public Assistant getAssistantByName(Long id) {
        return assistantRepository.findAssistantById(id)
                .orElseThrow(() -> new EntityNotFoundException("No record"));
    }
}
