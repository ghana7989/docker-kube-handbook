# Docker & Kubernetes Handbook -- Build Progress

> Last updated: 2026-03-16

## Phase Overview

| Phase | Description | Status | Notes |
|-------|-------------|--------|-------|
| 0 | Project Setup (plugins, config, theme, CSS) | DONE | All plugins installed, config set, build passes, dev server runs |
| 1 | Homepage & Navigation Structure | DONE | Landing page + all 8 hub/overview pages with WHY-first narrative |
| 2 | Day 1 -- Containers & Docker Fundamentals | DONE | 5 topic pages with D2/Mermaid diagrams, WHY-first, animations |
| 3 | Day 2 -- Building Containers | DONE | 5 topic pages with D2 diagrams, multi-stage builds, OS tabs |
| 4 | Day 3 -- Kubernetes Fundamentals | PENDING | |
| 5 | Day 4 -- Running Applications in K8s | PENDING | |
| 6 | Day 5 -- Scaling & Operations | PENDING | |
| 7 | Labs (all 9) | PENDING | |
| 8 | Troubleshooting Section | PENDING | |
| 9 | Reference Section | PENDING | |
| 10 | Example Asset Files | PENDING | |
| 11 | README & Final Verification | PENDING | |

---

## Phase 0: Project Setup

- [x] Install dependencies: astro-d2, astro-mermaid (legacy-peer-deps for Astro 6), mermaid, starlight-theme-flexoki, starlight-image-zoom, starlight-links-validator
- [x] Update astro.config.mjs: title, integrations (D2 with sketch+useD2js), Starlight plugins (flexoki cyan, image-zoom, links-validator), full sidebar config
- [x] Create src/styles/custom.css for minor style tweaks
- [x] Update public/favicon.svg (Docker containers + K8s branding)
- [x] Remove placeholder content (guides/example.md, reference/example.md)
- [x] Create all stub MDX files for every page (52 pages total)
- [x] Verify site builds (52 pages, all links valid) and runs with `npm run dev`

## Phase 1: Homepage & Navigation Structure

- [x] Create landing page (index.mdx) with hero, course story, app cards, 5-day path, prerequisites, quick links
- [x] Create Day 1 overview — "Your app works on your machine. Let's make it work everywhere."
- [x] Create Day 2 overview — "Package YOUR application, not someone else's."
- [x] Create Day 3 overview — "One server is not enough. What happens when it goes down?"
- [x] Create Day 4 overview — "Deploy into the cluster. How does traffic find it?"
- [x] Create Day 5 overview — "Can it handle Black Friday? What if we push a bad update?"
- [x] Create labs/index.mdx with prerequisite table and all 9 lab cards
- [x] Create troubleshooting/index.mdx with symptom listings
- [x] Create reference/index.mdx with cheat sheets, comparisons, YAML links

## Phase 2: Day 1 -- Containers & Docker Fundamentals

- [x] why-containers.mdx — "works on my machine" problem, namespaces/cgroups, D2 diagrams with animations
- [x] containers-vs-vms.mdx — side-by-side D2 architecture comparison, when to use each
- [x] docker-architecture.mdx — client/daemon/registry D2 flow with animations, OS install tabs
- [x] images-and-containers.mdx — blueprint vs instance, layers, tags, D2 diagrams
- [x] container-lifecycle.mdx — Mermaid state diagram, SIGTERM/SIGKILL, restart policies

## Phase 3: Day 2 -- Building Containers

- [x] dockerfile-fundamentals.mdx — WHY each instruction, build flow D2 with animations, .dockerignore
- [x] image-layers.mdx — caching strategy, layer sharing D2, cache invalidation, optimization tips
- [x] multi-stage-builds.mdx — size reduction D2 with animations, Go/React/Node examples
- [x] volumes.mdx — named volumes vs bind mounts, lifecycle D2, PostgreSQL persistence example
- [x] networking.mdx — bridge networks, DNS discovery D2 with animations, port mapping, isolation

## Phase 4: Day 3 -- Kubernetes Fundamentals

- [ ] why-kubernetes.mdx (WHY not just Docker in production)
- [ ] k8s-architecture.mdx (WHY the architecture looks this way, D2 sketch)
- [ ] control-plane.mdx (WHY each component exists, D2 sketch)
- [ ] worker-nodes.mdx (WHY kubelet/kube-proxy separation)
- [ ] cluster-setup.mdx (kubeadm setup, OS tabs, Mermaid sequence)

## Phase 5: Day 4 -- Running Applications in K8s

- [ ] pods.mdx (WHY pods not just containers, D2 sketch)
- [ ] replicasets.mdx (WHY desired state, Mermaid flowchart)
- [ ] deployments.mdx (WHY deployments wrap ReplicaSets)
- [ ] services.mdx (WHY service abstraction, D2 sketch)
- [ ] configmaps-secrets.mdx (WHY separate config from code, D2 sketch)

## Phase 6: Day 5 -- Scaling & Operations

- [ ] deployment-strategies.mdx (WHY rolling/blue-green/canary, D2 + Mermaid)
- [ ] resource-management.mdx (WHY resource limits matter)
- [ ] autoscaling.mdx (WHY autoscale, Mermaid HPA flow)
- [ ] dashboard.mdx (WHY a visual interface)
- [ ] course-wrapup.mdx (reflection, next steps)

## Phase 7: Labs (all 9)

- [ ] lab1-running-containers.mdx
- [ ] lab2-building-images.mdx
- [ ] lab3-volumes-networking.mdx
- [ ] lab4-containerize-backend.mdx
- [ ] lab5-install-k8s-cluster.mdx
- [ ] lab6-deploying-apps.mdx
- [ ] lab7-services-networking.mdx
- [ ] lab8-configmaps-secrets.mdx
- [ ] lab9-autoscaling-monitoring.mdx

## Phase 8: Troubleshooting

- [ ] docker-issues.mdx (daemon, permissions, ports, pulls, exits)
- [ ] kubernetes-issues.mdx (pending pods, CrashLoopBackOff, DNS, metrics, autoscaler)

## Phase 9: Reference

- [ ] docker-cheatsheet.mdx
- [ ] kubectl-cheatsheet.mdx
- [ ] yaml-examples.mdx
- [ ] service-comparison.mdx
- [ ] deployment-comparison.mdx
- [ ] container-lifecycle-ref.mdx

## Phase 10: Example Assets

- [ ] Dockerfile, Dockerfile.multistage
- [ ] deployment.yaml, service.yaml, configmap.yaml, secret.yaml
- [ ] job.yaml, cronjob.yaml, hpa.yaml

## Phase 11: README & Final Verification

- [ ] README.md with install, dev, build, deploy, content guide
- [ ] Full build verification (npm run build)
- [ ] Dev server verification (npm run dev)
- [ ] Link validation pass

---

## Feedback Log

| # | Feedback | Applied To |
|---|----------|------------|
| 1 | Teaching must be WHY-first, not command-driven. Every topic starts with the problem, then why this approach, then how. | All content — plan updated with WHY-first methodology |
| 2 | No image placeholders. Draw every concept with D2/Mermaid diagrams inline. | All pages — removed IMAGE SUGGESTION comments, added D2 diagrams |
| 3 | Use D2 animations (`style.animated: true`) on edges to show data flow, traffic, pipelines. | All D2 diagrams going forward |
| 4 | Use Starlight Flexoki theme with cyan accent. | Phase 0 — astro.config.mjs |
| 5 | Use both D2 and Mermaid responsibly (D2 for architecture, Mermaid for flows/states). | Plan diagram strategy section |
| 6 | Record all feedback and follow for rest of creation. | This file + plan "User Feedback & Rules" section |

## Rules for All Remaining Phases

1. WHY-first teaching — never "do this, do that"
2. No image placeholders — draw with D2/Mermaid
3. D2 animations on flow edges (`style.animated: true`)
4. D2 for architecture/hierarchy, Mermaid for flows/states
5. OS tabs with `syncKey="os"` where commands differ
6. Narrative thread — every topic connects to the microservice app
7. Take feedback after every phase before proceeding
