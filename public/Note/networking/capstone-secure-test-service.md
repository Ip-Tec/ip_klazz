---
title: "Capstone: Secure and Test a Service"
description: "Apply your networking knowledge to secure and test a real-world service."
---

# Capstone: Secure and Test a Service

This capstone project brings together all the concepts you've learned. You will be given a simple, vulnerable web application. Your job is to identify its weaknesses, secure it, and verify that your defenses are working.

## The Scenario

You are a security administrator at a small company. A developer has built a new internal-only web application for managing a simple customer database. The application has been deployed on a Linux server, but it has not yet been security-hardened.

Your task is to perform a security review, implement necessary defenses, and test your work.

**Disclaimer:** This is a learning exercise. Do not perform these tests on any system you do not own.

## The Vulnerable Application

The application is a simple Node.js application that provides a web interface to a customer list.

- It runs on port 8080.
- It allows users to view and search for customers.
- It has an admin login page at `/admin`.
- The developer has left you a note: "I set the admin password to `admin` for now. We can change it later."

## Phase 1: Reconnaissance and Initial Exploitation

This phase is about thinking like an attacker to find weaknesses.

1. **Network Scanning:**
    - Use `nmap` to scan the server. What ports are open? What services are running on those ports?
    - Example: `nmap -sV -p- <server_ip>`
    - What does `nmap` tell you about the web server version?

2. **Web Application Analysis:**
    - Browse the application. What functionality does it have?
    - Try to log in to the admin page with the weak credentials (`admin`/`admin`). What happens?
    - View the page source. Are there any comments or hidden fields?

3. **Vulnerability Identification:**
    - Based on your reconnaissance, what are the most obvious vulnerabilities?
    - **Hint:** Think about weak credentials, unencrypted communication, and information disclosure.

## Phase 2: Hardening the Server and Application

Now, let's fix the problems you found.

1. **Implement a Firewall:**
    - Configure the server's host-based firewall (e.g., `ufw` on Ubuntu) to restrict access.
    - What is the principle of least privilege in the context of firewall rules?
    - Create a rule that only allows incoming traffic on the ports you need (e.g., SSH and the application port). Deny everything else.
    - **Challenge:** How would you restrict SSH access to only come from a specific "management" IP address?

2. **Secure the Application:**
    - **Change the Weak Password:** This is the most critical step. How you do this depends on the application. For this exercise, let's assume you've edited a configuration file to set a new, strong, and unique password.
    - **Enable HTTPS:** This is essential for protecting credentials and data in transit.
        - Generate a self-signed SSL/TLS certificate for this exercise. In a real-world scenario, you would use a certificate from a trusted CA like Let's Encrypt.
        - Configure the web server (or a reverse proxy like Nginx) to use the certificate and serve the application over HTTPS on port 443.
        - Redirect all HTTP traffic to HTTPS.

3. **Principle of Least Privilege (User):**
    - The Node.js application should not run as the `root` user.
    - Create a dedicated, unprivileged user account to run the application.
    - Ensure this user has only the permissions it needs (e.g., read/write access to its own application directory).

## Phase 3: Verification and Testing

How do you know your defenses are working? You have to test them.

1. **Rescan with Nmap:**
    - Run your `nmap` scan again.
    - What has changed? Are the correct ports open and closed? Does `nmap` identify the service as running over SSL/TLS?

2. **Attempt Re-exploitation:**
    - Try to log in with the old, weak password. Does it fail?
    - Try to access the application over HTTP. Does it redirect you to HTTPS?
    - Use a packet sniffer like `Wireshark` or `tcpdump` to inspect the traffic to the login page. Is it encrypted? You shouldn't be able to see the password in cleartext.

3. **Review and Document:**
    - Document the vulnerabilities you found.
    - Document the remediation steps you took.
    - Explain how your changes have improved the security of the application.

## Conclusion

This capstone project demonstrates the cyclical nature of security. You must understand how to find weaknesses before you can effectively fix them. By combining network-level controls (firewalls), application-level hardening (strong passwords, HTTPS), and operating system security (least privilege), you can build a strong, layered defense.
