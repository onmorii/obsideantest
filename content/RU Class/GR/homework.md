---
title: GR Homework
layout: post
subtitle: 
description:
author: 
date: 2021-01-01 11:03:00 +0800
categories: [Homework]
tags: [GR,In-class]
math: true
mermaid: true
comments: true
---

# GR Homework

## Homework 1

$$
F^{\mu \nu}=\left[\begin{array}{cccc}
0 & E^{x} / C & E^{y} / C & E^{z} / C  \\
-E^{x} / C & 0 & B_{z} & -B_{y} \\
-E^{y} / C & -B_{z} & 0 & B_{x} \\
-E^{z} / C & B_{y} & -B_{x} & 0
\end{array}\right]
$$

$$\label{eq:lorentztransformation}
\text { and } \Lambda_{\nu}^{\mu}=\left[\begin{array}{cccc}
\gamma & 0 & -\gamma v / C & 0 \\
0 & 1 & 0 & 0 \\
-\gamma v / C & 0 & \gamma & 0 \\
0 & 0 & 0 & 1
\end{array}\right]
$$



which \eqref{eq:lorentztransformation} is lorentz transformation in $y$－direction，to demonstrate the lonentz transformation of electric field $E^{i}$ and magnetic field $B_{i}$ in $y$－direction，we therefore compute $F^{0^{\prime 1} 1^{\prime}},F^{0^{\prime} 2^{\prime}},$ $F^{0^{\prime} 1^{\prime}}, F^{1^{\prime} 2^{\prime}}, F^{3^{\prime} 1^{\prime}}$ ，and $F^{2^{\prime \prime \prime}}$ in term of electric field $E^{i}$ and magnetic field $B_{i}$ in unprime frame．The results of computation are followed by
$$
\begin{aligned}
& F^{0^{\prime} 1^{\prime}}=\Lambda^{0}{ }_{\rho}^{\prime} \Lambda^{\prime \prime}{ }_{\sigma} F^{\rho \sigma}=\Lambda_{0}^{0} \Lambda^{\prime}{ }_{1}^{\prime} F^{01}+\Lambda_{2}^{\prime} \Lambda_{1}^{\prime \prime} F^{21}=\frac{\gamma E^{x}}{C}+\frac{\gamma \gamma}{C} B_{2}=\frac{\gamma}{C}\left(E^{x}+\gamma v B_{2}\right) \quad(1.3), \\
& F^{0^{\prime} 2^{\prime}}=\Lambda^{0^{\prime}}{ }_{\rho} \Lambda^{2^{\prime}}{ }_{\sigma} F^{\rho \sigma}=\Lambda^{0^{\prime}}{ }_{0} \Lambda^{2^{\prime}}{ }_{2} F^{2}+\Lambda^{0^{\prime}}{ }_{2} \Lambda^{2^{\prime}} F^{20}=\gamma^{2} \frac{E^{y}}{c}-\frac{\gamma^{2} V^{2}}{C^{2}} \frac{E^{y}}{c}=\gamma^{2}\left(1-\frac{V^{2}}{C^{2}}\right) \frac{E^{y}}{c}=x^{2} \frac{1}{x^{2}} \frac{E^{y}}{c}=\frac{E^{y}}{c}(1.4), \\
& F^{0^{\prime 3}}=\Lambda^{0^{\prime}} \Lambda^{3^{\prime}} F^{\rho \alpha}=\Lambda^{0,} \Lambda^{3^{\prime}} F^{03}+\Lambda^{0^{\prime}} \Lambda^{3^{\prime}} F^{23}=\frac{\gamma E^{2}}{C}-\gamma \frac{\gamma B}{C} x=\frac{\gamma}{C}\left(E^{2}-V B_{x}\right) \quad(1,5), \\
& F^{1^{\prime 2}}=\Lambda^{\prime \prime}{ }_{\rho} \Lambda^{\prime 2}{ }_{\sigma} F^{\rho \sigma}=\Lambda_{1}^{\prime \prime} \Lambda^{\prime 2} F^{1^{0}}+\Lambda^{\prime \prime} \Lambda^{\prime 2}{ }_{2} F^{\prime 2}=\frac{\gamma V E^{x}}{C^{2}}+\gamma B_{2}=\gamma\left(B_{2}+\frac{V E^{x}}{C^{2}}\right) \quad(1.6) \text {, } \\
& F^{3^{\prime} 1^{\prime}}=\Lambda^{3^{\prime}}{ }_{\rho} \Lambda^{\prime \prime}{ }_{\sigma} F^{\rho \sigma}=\Lambda^{3^{\prime}}{ }_{3} \Lambda^{\prime \prime} F^{31}=\text { By (1.7), } \\
& F^{2^{\prime} 3^{\prime}}=\Lambda^{2^{\prime}} \rho \Lambda^{3^{\prime}}{ }_{{ }^{\prime}} F^{\rho \phi}=\Lambda^{2^{\prime}}{ }_{0} \Lambda^{3^{\prime}}{ }_{{ }^{\prime}} F^{0^{3}}+\Lambda^{2^{\prime}} \Lambda^{3^{\prime}}{ }_{3^{\prime}} F^{2^{3}}=\frac{-\gamma \gamma}{C^{2}} E^{2}+\gamma B_{x}=\gamma\left(B_{x}-\frac{\gamma}{C^{2}} E^{2}\right) \quad(1.8) \text {. }
\end{aligned}
$$

If we express $F^{0^{\prime} 1^{\prime}}, F^{0^{\prime} 2^{\prime}}, F^{0^{\prime} 3^{\prime}}, F^{3^{\prime} 1^{\prime}}, F^{1^{\prime} 2^{\prime}}, F^{3^{\prime} 1^{\prime}}, x^{\prime \prime}$ and $F^{2^{\prime} 0^{\prime}}$ in term of $E^{1^{\prime}}$ and $B_{1}^{\prime}$ ，then the results of computations（1．3），（1．4），（1．6），（1．6），（1．7），and（1．8）can be written as
$$
\begin{array}{llll}
E^{x^{\prime}}=\gamma\left(E^{x}+v B_{z}\right) & (1.9), & E^{y^{\prime}}=E^{y} & (1.10), \\
B_{x}^{\prime}=\gamma\left(B_{x} \frac{v}{c^{2}} E^{z}\right) & (1.12), & B_{y}^{\prime}=\gamma\left(E^{2}-v B_{x}\right)(1.11) \\
& & B_{y}(1.13), & B_{z}^{\prime}=\gamma\left(B_{z}+\frac{v}{c^{2}} E^{x}\right)
\end{array} \text { (1.14). }
$$

Therefore，when an observer in the primed frame measure the electric and magnetic field，the corresponding fields in the ．unprimed frame transform according to equation（1．9）－（1．14）．Ans
(2) The Maxwell's equations can be expressed in tensorial form as
$$
\partial \mu F^{\nu \mu}=\mu_{0} j^{\nu} \quad(2.1) \quad \text { and } \quad \partial_{[\mu} F_{\nu \rho]}=0
$$
, where the four-current is defined as
$$
j^{\mu}=(c \rho, \vec{j})
$$
and the relation between vacuum constants is
$$
\varepsilon_{0} \mu_{0}=\frac{1}{c^{2}} \quad(2.4)
$$

Setting $\nu=0$ in equation (2.1), we obtain
$$
\partial_{\mu} F^{0 \mu}=\partial_{1} F^{01}+\partial_{2} F^{02}+\partial_{3} F^{0^{3}}=\mu_{0} j^{0}
$$

According to equation (1.1), we can further write equation (2.5) as
$$
\begin{gathered}
\partial_{1} \frac{E^{x}}{c}+\partial_{2} \frac{E^{y}}{c}+\partial_{m} \frac{E^{2}}{c}=\mu_{0} j^{0} \\
\frac{1}{c}\left(\frac{\partial E^{x}}{\partial x}+\frac{\partial E^{y}}{\partial y}+\frac{\partial E^{2}}{\partial z}\right)=\mu_{0} j^{0} \\
\vec{\nabla} \cdot \vec{E}=\mu_{0} c j^{0} \quad(2.6) .
\end{gathered}
$$

According to equation (2.3) and (2.4), equation (2.6) can be written as
$$
\begin{aligned}
& \vec{\nabla} \cdot \vec{E}=\mu_{0} c^{2} \rho \\
& \vec{\nabla} \cdot \vec{E}=\mu_{0} \frac{1}{\varepsilon_{0}} \mu_{0} \\
& \vec{\nabla} \cdot \vec{E}=\frac{\rho}{\varepsilon_{0}}(2 \cdot y) .
\end{aligned}
$$

Setting $\nu=1$ in equation (2.1), we obtain
$$
\partial_{\mu} F^{1 \mu}=-\partial_{0} F^{01}+\partial_{2} F^{12}+\partial_{3} F^{13}=\mu_{0} j^{x} \quad(2,8)
$$

According to equation (1.1), equation (2.8) can be written as
$$
\begin{aligned}
& -\frac{1}{c^{2}} \frac{\partial E_{x}}{\partial t}+\frac{\partial B_{2}}{\partial y}-\frac{\partial B_{y}}{\partial z}=\mu_{0} j^{x} \\
& \frac{-1}{c^{2}} \frac{\partial E_{x}}{\partial t}+(\vec{\nabla} \times \vec{B})_{x}=\mu_{0} j^{x}
\end{aligned}
$$

Setting $\nu=2$ in equation (2.1), we obtain
$$
\partial_{\mu} F^{2 \mu}=\partial_{0} F^{20}+\partial_{1} F^{21}+\partial_{3} F^{23}=\mu_{0} j^{4} \quad(2,10)
$$

According to equation (1.1), equation (2.10) can be written as
$$
\begin{align*}
& \frac{-1}{c^{2}} \frac{\partial E^{y}}{\partial t}-\frac{\partial B_{z}}{\partial x}+\frac{\partial B_{x}}{\partial z}=\mu_{0} j y \\
& \frac{-1}{c^{2}} \frac{\partial E^{y}}{\partial t}+(\vec{\nabla} \times \vec{B}) y=\mu_{0} j y \tag{2.11}
\end{align*}
$$

Setting $\nu=3$ in equation (2.1), we obtain
$$
\partial_{\mu} F^{3 \mu}=\partial_{0} F^{30}+\partial_{1} F^{31}+\partial_{2} F^{32}-\mu_{0} j^{2} \quad \text { (2.12) }
$$

According to equation (1.1), equation (2.12) can be written as
$$
\begin{aligned}
& \frac{-1}{c^{2}} \frac{\partial E_{2}}{\partial t}+\frac{\partial B_{y}}{\partial x}-\frac{\partial B_{x}}{\partial y}=\mu_{0} j^{2} \\
& -\frac{1}{c^{2}} \frac{\partial E_{2}}{\partial t}+(\vec{\nabla} \times \vec{B})_{z}=\mu_{0} j^{2} \quad(2.13)
\end{aligned}
$$

By combining equation $(2.9),(2.11)$, and (2.13), we obtain
$$
\begin{aligned}
& \frac{-1}{C^{2}}\left(\frac{\partial}{\partial t}\left(E^{x}+E^{y}+E^{2}\right)\right)+(\vec{\nabla} \times \vec{B})_{x}+(\vec{\nabla} \times \vec{B})_{y}+\left(\vec{\nabla}^{2} \times \vec{B}\right)_{z}=\mu\left(j^{x}+j^{y}+j^{z}\right) \\
& -\frac{1}{C^{2}} \frac{\partial \vec{E}}{\partial t}+\vec{\nabla} \times \vec{B}=\mu_{0} \vec{j} \\
& \vec{\nabla} \times \vec{B}=\mu_{0} \vec{j}+\frac{1}{C^{2}} \frac{\partial \vec{E}}{\partial t}(2.14) .
\end{aligned}
$$

According to equation (2.4), equation (2.14) can be written as
$$
\vec{\nabla} \times \vec{B}=\mu_{0} \vec{j}+\mu_{0} \varepsilon_{0} \frac{\partial \vec{E}}{\partial t}
$$

If we set $\nu=0$ in equation (2.2), equation (2.2) can be written in three distinct cases:
Case 1: When $\mu=12$ and $\rho=1$. equation (2.2) can be written as
$$
\begin{aligned}
& \partial_{[2} F_{01]}=0 \\
& \partial_{2} F_{01}-\partial_{2} F_{10}+\partial_{1} F_{20}-\partial_{1} F_{02}+\partial_{0} F_{12}-\partial_{0} F_{21}=0 \\
& 2\left(\partial_{2} F_{01}+\partial_{1} F_{20}+\partial_{0} F_{12}\right)=0 \\
& \partial_{2} F_{01}+\partial_{1} F_{20}+\partial_{0} F_{12}=0 \quad(2.16) .
\end{aligned}
$$

According to equation (1.1), we can express $F_{01}, F_{20}$, and $F_{12}$ as
$$
\begin{aligned}
& F_{01}=\eta_{00} \eta_{11} F^{01}=-\frac{E^{x}}{C} \\
& F_{20}=\eta_{22} \eta_{00} F^{20}=\frac{E^{y}}{C} \\
& F_{12}=\eta_{11} \eta_{22} F^{12}=B_{2}
\end{aligned}
$$

Substituting $F_{0}, F_{20}$, and $F_{12}$ into equation (2.16), we obtain
$$
\begin{aligned}
& -\partial_{2} \frac{E^{x}}{C}+\partial_{1} \frac{E^{y}}{C}+\partial_{0} B_{2}=0 \\
& \frac{1}{C}\left(\frac{\partial E^{y}}{\partial x}-\frac{\partial E^{x}}{\partial y}\right)+\frac{1}{C} \frac{\partial B_{2}}{\partial t}=0 \\
& \frac{1}{C}(\vec{\nabla} \times \vec{E})_{2}=\frac{-1}{C} \frac{\partial B_{2}}{\partial t} \\
& (\vec{\nabla} \times \vec{E})_{2}=-\frac{\partial B_{2}}{\partial t} \quad(2.17)
\end{aligned}
$$

Case 2: When $\mu=1$ and $\rho=3$, equation (2.2) can be written as
$$
\begin{aligned}
& \partial_{[1} F_{03]}=0 \\
& \partial_{1} F_{03}-\partial_{1} F_{30}+\partial_{3} F_{10}-\partial_{3} F_{01}+\partial_{0} F_{31}-\partial_{0} F_{13}=0 \\
& 2\left(\partial_{3} F_{10}+\partial_{1} F_{03}+\partial_{0} F_{31}\right)=0 \\
& \partial_{3} F_{10}+\partial_{1} F_{03}+\partial_{0} F_{31}=0 \quad(2.18)
\end{aligned}
$$

According to equation (1.1), we can express $F_{10}, F_{03}$, and $F_{31}$ as
$$
\begin{aligned}
& F_{10}=\eta_{11} \eta_{00} F^{10}=\frac{E^{x}}{C} \\
& F_{03}=\eta_{00} \eta_{33} F^{03}=\frac{-E^{2}}{C} \\
& F_{31}=\eta_{33} \eta_{11} F^{31}=B y
\end{aligned}
$$

Substituting $F_{10}, F_{03}$, and $F_{34}$ into equation (2.18), we obtain
$$
\begin{aligned}
& \partial_{3} \frac{E^{x}}{C}-\partial_{1} \frac{E^{2}}{C}+\partial_{0} B_{y}=0 \\
& \frac{1}{C}\left(\frac{\partial E^{x}}{\partial z}-\frac{\partial E^{2}}{\partial x}\right)+\frac{1}{C} \frac{\partial B_{y}}{\partial t}=0 \\
& \frac{1}{C}(\vec{\nabla} \times \vec{E})_{y}=-\frac{1}{\ell} \frac{\partial B_{y}}{\partial t} \\
& \quad(\vec{\nabla} \times \vec{E})_{y}=-\frac{\partial B_{y}}{\partial t} \quad(2.19)
\end{aligned}
$$

Case 3: When $\mu=2$ and $\rho=3$, equation (2.2) can be written as
$$
\begin{aligned}
& \partial_{[2} F_{03]}=0 \\
& \partial_{2} F_{03}-\partial_{2} F_{30}+\partial_{3} F_{20}-\partial_{3} F_{02}+\partial_{0} F_{32}-\partial_{0} F_{32}=0 \\
& 2\left(\partial_{2} F_{03}+\partial_{3} F_{20}+\partial_{0} F_{32}\right)=0 \\
& \partial_{2} F_{03}+\partial_{3} F_{20}+\partial_{0} F_{32}=0 \quad \text { (2.20). }
\end{aligned}
$$

According to equation (1.1), we can express $F_{20}, F_{03}$, and $F_{32}$ as
$$
\begin{aligned}
& F_{20}=\eta_{22} \eta_{00} F^{20}=\frac{E^{Y}}{C} \\
& F_{03}=\eta_{00} \eta_{33} F^{33}=-\frac{E^{2}}{C} \\
& F_{32}=\eta_{33} \eta_{22} F^{32}=-B_{x}
\end{aligned}
$$

Substituting $F_{20}, F_{03}$, and $F_{32}$ into equation (2.20), we obtain
$$
\begin{aligned}
& \partial_{3} \frac{E^{y}}{c}-\partial_{2} \frac{E^{2}}{c}-\partial_{0} B_{x}=0 \\
& \frac{-1}{c}\left(\frac{\partial E^{2}}{\partial y}-\frac{\partial E^{y}}{\partial z}\right) \frac{-1 \partial B_{x}}{c}=0 \\
& \frac{1}{c}(\vec{\nabla} \times \vec{E})_{x}=-\frac{1}{c} \frac{\partial B_{x}}{\partial t} \\
& (\vec{\nabla} \times \vec{E})_{x}=-\frac{\partial B_{x}}{\partial t} \quad(2.21)
\end{aligned}
$$

By combining equation (2.17), (2.19), and (2.21), we obtain
$$
\begin{aligned}
& (\vec{\nabla} \times \vec{E})_{x}+(\vec{\nabla} \times \vec{E})_{y}+(\vec{\nabla} \times \vec{E})_{z}=-\frac{\partial}{\partial t}\left(B_{x}+B_{y}+B_{z}\right) \\
& \vec{\nabla} \times \vec{E}=-\frac{\partial \vec{B}}{\partial t}(2.22) .
\end{aligned}
$$

If we fix $\mu, \nu, \rho=1,2,3$ in equation (2.2), equation (2.2) can be written as
$$
\begin{aligned}
& \partial_{[1} F_{23]}=0 \\
& \partial_{1} F_{23}-\partial_{1} F_{32}+\partial_{3} F_{12}-\partial_{3} F_{21}+\partial_{2} F_{31}-\partial_{2} F_{13}=0 \\
& 2\left(\partial_{1} F_{23}+\partial_{3} F_{12}+\partial_{2} F_{31}\right)=0 \\
& \partial_{1} F_{23}+\partial_{2} F_{31}+\partial_{3} F_{12}=0
\end{aligned}
$$

According to equation (1.1), we can express $F_{23}, F_{31}$, and $F_{12}$ as
$$
\begin{aligned}
& F_{23}=\eta_{22} \eta_{33} F^{23}=B_{x} \\
& F_{31}=\eta_{33} \eta_{11} F^{31}=B_{y} \\
& F_{12}=\eta_{11} \eta_{22} F^{12}=B_{z}
\end{aligned}
$$

Substituting $F_{23}, F_{31}$, and $F_{12}$ into equation (2.23), we obtain
$$
\begin{aligned}
& \partial_{1} B_{x}+\partial_{2} B_{y}+\partial_{3} B_{z}=0 \\
& \frac{\partial B_{x}}{\partial x}+\frac{\partial B_{y}}{\partial y}+\frac{\partial B_{z}}{\partial z}=0 \\
& \vec{\nabla} \cdot \vec{B}=0
\end{aligned}
$$

Equation (2...) leads to equation (2.7.) and (2.14), which correspond to the original Maxwell's equation. Similarly, equation (2.2) leads to equation (2.22) and (2.24), which are also equivalent to the original Maxwell's equation.
This shows that "the tensorial form of Maxwell's equation can be converted into the original Maxwell's equation. Ans


