// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroD2 from 'astro-d2';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
	integrations: [
		astroD2({
			sketch: true,
			experimental: { useD2js: true },
		}),
		starlight({
			title: 'Docker & Kubernetes Handbook',
			description: 'A 5-day hands-on training course — learn Docker and Kubernetes by building and deploying a real microservice application.',
			plugins: [
				starlightThemeFlexoki({ accentColor: 'cyan' }),
				starlightImageZoom(),
				starlightLinksValidator({ errorOnRelativeLinks: false }),
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/pavan/docker-kube-handbook',
				},
			],
			customCss: ['./src/styles/custom.css'],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: 'Day 1 — Docker Fundamentals',
					badge: { text: 'Day 1', variant: 'tip' },
					items: [
						{ slug: 'day1' },
						{ slug: 'day1/why-containers' },
						{ slug: 'day1/containers-vs-vms' },
						{ slug: 'day1/docker-architecture' },
						{ slug: 'day1/images-and-containers' },
						{ slug: 'day1/container-lifecycle' },
					],
				},
				{
					label: 'Day 2 — Building Containers',
					badge: { text: 'Day 2', variant: 'note' },
					items: [
						{ slug: 'day2' },
						{ slug: 'day2/dockerfile-fundamentals' },
						{ slug: 'day2/image-layers' },
						{ slug: 'day2/multi-stage-builds' },
						{ slug: 'day2/volumes' },
						{ slug: 'day2/networking' },
					],
				},
				{
					label: 'Day 3 — Kubernetes Fundamentals',
					badge: { text: 'Day 3', variant: 'caution' },
					items: [
						{ slug: 'day3' },
						{ slug: 'day3/why-kubernetes' },
						{ slug: 'day3/k8s-architecture' },
						{ slug: 'day3/control-plane' },
						{ slug: 'day3/worker-nodes' },
						{ slug: 'day3/cluster-setup' },
					],
				},
				{
					label: 'Day 4 — Running Apps in K8s',
					badge: { text: 'Day 4', variant: 'danger' },
					items: [
						{ slug: 'day4' },
						{ slug: 'day4/pods' },
						{ slug: 'day4/replicasets' },
						{ slug: 'day4/deployments' },
						{ slug: 'day4/services' },
						{ slug: 'day4/configmaps-secrets' },
					],
				},
				{
					label: 'Day 5 — Scaling & Operations',
					badge: { text: 'Day 5', variant: 'success' },
					items: [
						{ slug: 'day5' },
						{ slug: 'day5/deployment-strategies' },
						{ slug: 'day5/resource-management' },
						{ slug: 'day5/autoscaling' },
						{ slug: 'day5/dashboard' },
						{ slug: 'day5/course-wrapup' },
					],
				},
				{
					label: 'Hands-on Labs',
					collapsed: true,
					items: [
						{ slug: 'labs' },
						{ slug: 'labs/lab1-running-containers' },
						{ slug: 'labs/lab2-building-images' },
						{ slug: 'labs/lab3-volumes-networking' },
						{ slug: 'labs/lab4-containerize-backend' },
						{ slug: 'labs/lab5-install-k8s-cluster' },
						{ slug: 'labs/lab6-deploying-apps' },
						{ slug: 'labs/lab7-services-networking' },
						{ slug: 'labs/lab8-configmaps-secrets' },
						{ slug: 'labs/lab9-autoscaling-monitoring' },
					],
				},
				{
					label: 'Troubleshooting',
					collapsed: true,
					items: [
						{ slug: 'troubleshooting' },
						{ slug: 'troubleshooting/docker-issues' },
						{ slug: 'troubleshooting/kubernetes-issues' },
					],
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [
						{ slug: 'reference' },
						{ slug: 'reference/docker-cheatsheet' },
						{ slug: 'reference/kubectl-cheatsheet' },
						{ slug: 'reference/yaml-examples' },
						{ slug: 'reference/service-comparison' },
						{ slug: 'reference/deployment-comparison' },
						{ slug: 'reference/container-lifecycle-ref' },
					],
				},
			],
		}),
	],
});
