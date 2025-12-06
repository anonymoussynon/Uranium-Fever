---
title: Troubleshooting
hide_title: true
sidebar_label: Troubleshooting
---

# ![Banner Troubleshooting](https://github.com/user-attachments/assets/ec9f604c-6306-4b72-9a5d-aad58a3b0234)


:::tip
This page contains various Nuclear Sunset troubleshooting steps that should only be used when referenced by the [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq) or Nuclear Sunset authors.
:::

### ![Intel iGPU Users and GPUs Without Vulkan Support - Downgrading DXVK](https://github.com/user-attachments/assets/3106c27e-5d75-47fb-a43c-5db7c97925c2)

:::warning Pre-Bundled DXVK
The latest version of DXVK comes included with Nuclear Sunset.

Intel iGPUs and older GPUs without Vulkan support are incompatible with the bundled version of DXVK and must instead use a downgraded version.
:::

- **Intel iGPU users:**
	- Navigate to the `C:\Modding\Nuclear Sunset\DXVK\DXVK 1.10.1` folder.
	- Move `d3d9.dll` and `dxvk.conf`into `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

- **GPUs without Vulkan support:**
	- Navigate to the `C:\Modding\Nuclear Sunset\DXVK\DXVK 1.10.3` folder.
	- Move `d3d9.dll` and `dxvk.conf`into `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

### ![Disabling Steam Overlay](https://github.com/user-attachments/assets/cb9d52c1-c9a8-403d-86f9-3261bddca031)

:::tip Why?
This process disables Steam Overlay, which causes crashes and worsen performance.
:::

- Navigate to the `Steam Root Folder` (where `steam.exe` is located).
- Right click `GameOverlayRenderer.dll` and open `properties`.
- Open the `security tab` and click `edit`.
- Click the `Deny` option under `Read & Execute` for every user.
- Click `Apply`, then `Yes`.

  ![Steam Overlay 1](https://github.com/user-attachments/assets/49fdeabe-c964-4290-a28d-af6f06a9b1a9)

- In the same folder, right click `SteamOverlayVulkanLayer.dll` and open `properties`.
- Open the `security tab` and click `edit`.
- Click the `Deny` option under `Read & Execute` for every user.
- Click `Apply`, then `Yes`.

  ![Steam Overlay 2](https://github.com/user-attachments/assets/0f84d294-f5f0-4a0d-9927-d0524785362f)

:::warning
This step will need to be repeated each time Steam updates, which occurs each time time steam launches.

This CANNOT be done directly through the Steam settings. Even if disabled via Steam, the overlay still injects its DLL directly into the game, which can result in crashes. 
:::
