package yteintern.springdemo;

public record Response(
        ResponseType responseType,
        String message,
        String isAuthority
) {

}