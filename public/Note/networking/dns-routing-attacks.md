---
title: "DNS and Routing Attacks (Defensive)"
description: "Understand common attacks against DNS and routing and how to defend against them."
---

# DNS and Routing Attacks (Defensive)

DNS and routing are fundamental to how the internet works. DNS translates human-readable domain names into machine-readable IP addresses, and routing protocols determine the path that data takes across the internet. Because they are so critical, they are also a prime target for attackers.

## DNS Attacks

### DNS Spoofing / Cache Poisoning

In a DNS cache poisoning attack, an attacker injects a forged DNS record into a DNS resolver's cache. When a user tries to visit a legitimate website (e.g., `www.mybank.com`), the resolver returns the attacker's malicious IP address instead of the real one. The user is then sent to a fake website that looks like the real bank, where their credentials can be stolen.

**Defenses:**

- **DNSSEC (DNS Security Extensions):** DNSSEC provides a way to verify the authenticity and integrity of DNS data. It uses digital signatures to ensure that the DNS records have not been tampered with. If your domain uses DNSSEC, resolvers that support it can detect and reject forged records.
- **Use Trusted Resolvers:** Use DNS resolvers from reputable providers (like Google's `8.8.8.8` or Cloudflare's `1.1.1.1`) that have implemented protections against cache poisoning.
- **Randomize Source Ports:** DNS resolvers should use a different, randomly chosen source port for each query. This makes it much harder for an attacker to guess the correct port and inject a forged response.

### DNS Amplification (DDoS Attack)

This is a type of Distributed Denial of Service (DDoS) attack. The attacker sends a large number of DNS queries to open DNS resolvers, but they spoof the source IP address to be the victim's IP address.

The attacker crafts the query in such a way that the response will be much larger than the request. The open resolvers then send these large responses to the victim's IP address, overwhelming it with traffic and taking it offline.

**Defenses:**

- **Don't Run an Open Resolver:** If you run a DNS server, configure it to only answer queries for domains it is authoritative for, or only for your own clients. Do not allow it to perform recursive lookups for anyone on the internet.
- **Ingress Filtering:** ISPs should implement ingress filtering to block packets with spoofed source IP addresses.
- **DDoS Mitigation Services:** Use a DDoS mitigation service that can absorb and filter out malicious traffic.

## Routing Attacks

### BGP Hijacking

The internet is a network of networks, called Autonomous Systems (AS). The Border Gateway Protocol (BGP) is the routing protocol that is used to exchange routing information between these networks.

In a BGP hijacking attack, an attacker illegitimately announces that they own a block of IP addresses that they do not. If other routers believe this announcement, they will start sending traffic destined for those IP addresses to the attacker's network.

This can be used to:

- **Create a blackhole:** The attacker simply drops the traffic, causing a denial of service.
- **Intercept traffic:** The attacker can inspect or modify the traffic before (optionally) sending it on to the real destination (a man-in-the-middle attack).

**Defenses:**

- **Resource Public Key Infrastructure (RPKI):** RPKI is a framework that allows network operators to create cryptographically signed statements about which AS is authorized to announce their IP address prefixes. Routers can use this information to validate BGP announcements and reject invalid ones.
- **Route Monitoring:** Use services that monitor BGP announcements and can alert you if your prefixes are being announced by an unauthorized AS.
- **Collaboration with ISPs:** Work with your upstream ISPs to ensure they are filtering BGP announcements and have implemented RPKI.

## Summary

DNS and routing are critical infrastructure, and attacks against them can have a major impact. As a defender, it's important to understand these attacks and implement the appropriate security controls. Using DNSSEC and RPKI are two of the most important steps you can take to protect your organization from these threats.

**Next Topic:** [Capstone: secure & test a service](capstone-secure-test-service)
