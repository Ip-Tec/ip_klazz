---
title: "IP Addressing and Subnetting"
description: "Learn how IP addresses work and how to subnet them."
---

# IP Addressing and Subnetting

Every device on a network needs a unique identifier. In TCP/IP networks, this is the IP (Internet Protocol) address.

## What is an IP Address?

An IP address is a numerical label assigned to each device participating in a computer network that uses the Internet Protocol for communication. There are two versions of IP addresses in use today: IPv4 and IPv6.

### IPv4

An IPv4 address is a 32-bit number, typically represented in dot-decimal notation (e.g., `192.168.1.1`). This format consists of four octets (8-bit numbers) separated by dots. Since each octet can be a number from 0 to 255, the total number of possible IPv4 addresses is 2<sup>32</sup>, which is about 4.3 billion.

#### Private vs. Public IP Addresses

- **Public IP addresses** are used on the internet and are assigned by Internet Service Providers (ISPs).
- **Private IP addresses** are used within local networks (LANs) and are not routable on the public internet. Common private address ranges are:
  - `10.0.0.0` to `10.255.255.255`
  - `172.16.0.0` to `172.31.255.255`
  - `192.168.0.0` to `192.168.255.255`

### IPv6

With the rapid growth of the internet, IPv4 addresses have become scarce. IPv6 was developed to solve this problem. An IPv6 address is a 128-bit number, represented in hexadecimal notation (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`). This allows for a massive number of addresses (2<sup>128</sup>), ensuring we won't run out anytime soon.

## What is Subnetting?

Subnetting is the process of dividing a large network into smaller, more manageable networks called subnets. This has several benefits:

- **Improved Security:** You can isolate different parts of your network.
- **Better Performance:** Reduces network traffic and congestion.
- **Simplified Management:** Easier to manage smaller networks.

### How Subnetting Works

Subnetting is done by "borrowing" bits from the host portion of an IP address and using them to create a subnet mask. The subnet mask determines which part of the IP address is the network portion and which is the host portion.

For example, a common subnet mask is `255.255.255.0`. In binary, this is:
`11111111.11111111.11111111.00000000`

The `1`s represent the network portion, and the `0`s represent the host portion. By adding more `1`s to the subnet mask, you can create more subnets, but with fewer hosts per subnet.

## CIDR Notation

Classless Inter-Domain Routing (CIDR) notation is a more compact way to represent a subnet mask. It's written as the IP address followed by a `/` and the number of bits in the network portion.

For example, `192.168.1.0/24` is equivalent to `192.168.1.0` with a subnet mask of `255.255.255.0`. The `/24` indicates that the first 24 bits are the network portion.

## Summary

Understanding IP addressing and subnetting is crucial for network administrators and anyone working with network infrastructure. In the next section, we'll explore the differences between TCP and UDP.

**Next Topic:** [TCP & UDP internals](tcp-udp-internals)
