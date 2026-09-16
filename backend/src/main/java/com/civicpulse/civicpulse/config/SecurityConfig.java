package com.civicpulse.civicpulse.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth

                        // Uploaded complaint images
                        .requestMatchers("/uploads/**").permitAll()

                        // User APIs
                        .requestMatchers("/api/users/**").permitAll()

                        // Complaint APIs
                        .requestMatchers("/api/complaints/**").permitAll()

                        // Dashboard APIs
                        .requestMatchers("/api/dashboard/**").permitAll()

                        // ADMIN APIs
                        .requestMatchers("/api/admin/**").permitAll()

                        // Everything else
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}
