package com.example.akros;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController

public class Test {

        @GetMapping("/greet")
        public String greet() {
            return "Hello from Spring Boot!";
        }
    }

