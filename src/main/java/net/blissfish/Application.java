package net.blissfish;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.HandlerMapping;

@SpringBootApplication
@Controller
public class Application extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(Application.class, args);
	}

	@RequestMapping(value = { "gudrunbecker", "heinzboth", "attilazoller", "juttahipp", "northseajazz",
			"jazzgeschichte", "jazzgeschichte_cd", "njgh", "allthatjazz", "links", "galerie01", "galerie02",
			"galerie03", "contact-order", "projects", "time-travel" }, method = RequestMethod.GET)
	public String projects(HttpServletRequest request) {
		System.out.println("*************************************");
		System.out.println("* process " + System.currentTimeMillis() + " " + request.getAttribute("project"));
		String pattern = (String) request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE);
		request.setAttribute("project", pattern);
		System.out.println("Pattern matched: " + pattern);
		return "body";
	}

}