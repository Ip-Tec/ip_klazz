---
title: "Networking Fundamentals"
description: "An introduction to the core concepts of computer networking."
---

# Networking Fundamentals

Welcome to the world of computer networking! This guide will introduce you to the fundamental concepts that underpin all network communications.

## What is a Network?

A network is a collection of interconnected devices that can exchange data and share resources. These devices can be computers, servers, printers, or even smart home devices. The connections between them can be wired (like Ethernet cables) or wireless (like Wi-Fi).

## The OSI Model

The Open Systems Interconnection (OSI) model is a conceptual framework that standardizes the functions of a telecommunication or computing system in seven abstract layers. Each layer has a specific function and communicates with the layers directly above and below it.

1. **Physical Layer:** The physical hardware that transmits data, like cables and switches.
2. **Data Link Layer:** Manages how data is formatted for transmission and provides error detection.
3. **Network Layer:** Responsible for logical addressing (IP addresses) and routing data between networks.
4. **Transport Layer:** Provides reliable data transfer between systems, using protocols like TCP and UDP.
5. **Session Layer:** Manages communication sessions between applications.
6. **Presentation Layer:** Translates, encrypts, and compresses data.
7. **Application Layer:** The layer that user applications interact with, like your web browser or email client.

## The TCP/IP Model

The TCP/IP model is a more practical, four-layer model that is widely used in modern networks.

1. **Network Access Layer:** Combines the Physical and Data Link layers of the OSI model.
2. **Internet Layer:** Corresponds to the Network layer of the OSI model. This is where IP (Internet Protocol) operates.
3. **Transport Layer:** Corresponds to the Transport layer of the OSI model. This is where TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate.
4. **Application Layer:** Combines the Session, Presentation, and Application layers of the OSI model.

## Key Networking Devices

- **Router:** A device that connects different networks and forwards data packets between them.
- **Switch:** A device that connects devices within the same network and forwards data to the correct device.
- **Hub:** A simple device that connects multiple devices but broadcasts data to all of them, unlike a switch.
- **Modem:** A device that modulates and demodulates signals to allow computers to communicate over telephone or cable lines.

## Summary

This was a brief introduction to networking fundamentals. Understanding these core concepts is essential for building and securing networks. In the next section, we'll dive into IP addressing and subnetting.

**Next Topic:** [IP addressing & subnetting](ip-addressing-subnetting)
