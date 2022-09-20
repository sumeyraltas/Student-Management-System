package yteintern.springdemo.authentication.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
       /* return httpSecurity.authorizeHttpRequests()
                .antMatchers("/","/students","/lectures","/exams","/admin","/homeworks","/lecturers","/assistant").permitAll()
             //   .antMatchers("/admin").hasAuthority("Admin")
                .anyRequest().permitAll()
                //.authenticated()
                .and()
                //.httpBasic().and()
                .formLogin()
                .csrf().disable()
                .build();*/
        return httpSecurity.authorizeHttpRequests()
                .antMatchers("/login").permitAll()
                .anyRequest().permitAll()
                .and()
                .formLogin().disable()
                .logout().disable()
                .csrf().disable()
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationProvider authenticationProvider) {
        return new ProviderManager(authenticationProvider);
    }


}