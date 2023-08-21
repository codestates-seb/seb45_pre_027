package cs.pre.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@EnableJpaAuditing
<<<<<<< HEAD:server/src/main/java/cs/pre/project/ProjectApplication.java
public class ProjectApplication {
=======
@SpringBootApplication
public class TestApplication {

>>>>>>> 5efa81fdc65dfbf5b0a618839bfa618a13414224:server/src/main/java/com/example/tset/TestApplication.java
	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}
}
