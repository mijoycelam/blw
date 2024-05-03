package com.akros;

import com.intuit.karate.junit5.Karate;

public class APITest {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("classpath:com/akros/users.feature");
    }
}
