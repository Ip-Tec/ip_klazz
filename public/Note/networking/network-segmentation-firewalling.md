---
title: "Network Segmentation and Firewalling"
description: "Learn how to use network segmentation and firewalls to secure your network."
---

# Network Segmentation and Firewalling

A flat network, where all devices can communicate freely with each other, is a security nightmare. If one device is compromised, the attacker can easily move laterally to attack other devices. Network segmentation and firewalling are two key security controls that help you contain threats and limit the damage of a breach.

## What is Network Segmentation?

Network segmentation is the practice of dividing a computer network into smaller, isolated segments or subnets. The goal is to control the flow of traffic between these segments, making it harder for an attacker to move around your network.

### Benefits of Network Segmentation

- **Improved Security:** If an attacker compromises a device in one segment, they are contained within that segment. They cannot easily access devices in other segments.
- **Better Performance:** By reducing the amount of traffic on each segment, you can improve network performance.
- **Reduced Scope of Compliance:** If you need to comply with regulations like PCI DSS, you can isolate the systems that are in scope into their own segment. This reduces the cost and complexity of compliance.

### How to Segment a Network

- **Physical Segmentation:** The most secure way to segment a network is to use physically separate hardware (switches, routers) for each segment. This is also the most expensive.
- **Virtual LANs (VLANs):** A more common and cost-effective approach is to use VLANs. A VLAN allows you to create multiple logical networks on a single physical switch. Devices on different VLANs cannot communicate with each other without going through a router or firewall.
- **Subnetting:** You can also segment a network by dividing it into smaller subnets.

### A Sample Segmented Network

A common network design is to have at least three segments:

1. **DMZ (Demilitarized Zone):** This is where you place your public-facing servers, such as web servers and email servers. The DMZ is a high-risk area, and devices in the DMZ should be hardened and closely monitored.
2. **Internal/Corporate Network:** This is where your user workstations and internal servers are located.
3. **Guest Network:** This is a separate network for guest users. The guest network should have no access to the internal network.

## What is a Firewall?

A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.

Firewalls are placed at the boundaries between network segments to enforce access control policies. For example, you would place a firewall between your DMZ and your internal network.

### Types of Firewalls

- **Packet-Filtering Firewall:** This is the most basic type of firewall. It makes decisions based on the IP address, port, and protocol of the packet. It does not inspect the contents of the packet.
- **Stateful Inspection Firewall:** This type of firewall keeps track of the state of network connections. It can make more intelligent decisions about which packets to allow or block. For example, it will only allow incoming traffic if it is in response to an outgoing request.
- **Next-Generation Firewall (NGFW):** An NGFW combines traditional firewall functionality with other security features, such as:
  - Intrusion Prevention System (IPS)
  - Deep Packet Inspection (DPI) to inspect the contents of packets
  - Application awareness to block or allow specific applications
  - Threat intelligence feeds

### Firewall Rules

Firewall rules are the heart of a firewall. They define what traffic is allowed and what is denied. A typical firewall rule will have the following components:

- **Source:** The source IP address or network.
- **Destination:** The destination IP address or network.
--   **Service/Port:** The destination port (e.g., 80 for HTTP, 443 for HTTPS).
- **Action:** Allow or Deny.

It is a best practice to follow the principle of **least privilege** when creating firewall rules. This means that you should only allow the traffic that is absolutely necessary and deny everything else (an implicit deny or deny-all rule at the end).

For example, to allow web traffic to your web server in the DMZ, you would create a rule like this:

`Allow traffic from Any Source on Any Port to WebServer_IP on Port 443 (HTTPS)`

You would not want a rule that says "Allow traffic from Any Source to Any Destination on Any Port."

## Summary

Network segmentation and firewalling are fundamental security controls. By dividing your network into smaller, isolated segments and using firewalls to control the traffic between them, you can significantly improve your security posture and limit the impact of a security breach.

**Next Topic:** [DNS & routing attacks (defensive)](dns-routing-attacks)
