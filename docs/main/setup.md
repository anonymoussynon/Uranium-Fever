---
sidebar_position: 6
title: Setup Instructions
hide_title: true
sidebar_label: Setup Instructions
---

# ![Banner Setup Instructions](https://github.com/user-attachments/assets/c33fd668-6295-4c27-be33-a3c99cc33993)

:::danger Important
Follow these instructions carefully and in the exact order specified. Skipping steps may lead to installation issues.

Before requesting support, check the [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq) for troubleshooting common errors.
:::

### <p align="center"> ![Creating Necessary File Paths](https://github.com/user-attachments/assets/34a47045-6a1d-4c9d-bb94-8187f3694834) </p>
- Navigate to the `Root Directory` (e.g., `C:\`, `D:\`).
- Create a folder named `Modding` and open it.
- Inside, create a folder named `Wabbajack` (**DO NOT** open it).
- Create another folder named `Nuclear Sunset` and open it. 
- Inside `Nuclear Sunset`, create a folder named `downloads`.

:::important Double Check
Verify these file paths exist (Root Directory may vary):
- `C:\Modding\Nuclear Sunset\downloads`
- `C:\Modding\Wabbajack`
:::

<br></br>
<br></br>

### <p align="center"> ![Creating Antivirus Exclusions](https://github.com/user-attachments/assets/21189acf-4d6a-47d4-bd02-2d1f0af8fd75) </p>
:::tip Why?
Excluding these folders prevents Windows or third-party antivirus from blocking essential files.
:::

- Open `Windows Security`.
- Go to `Virus & Threat Protection`.
- Under `Virus & Threat Protection Settings`, select `Manage Settings`.
- Scroll to `Exclusions` and select `Add or Remove Exclusions`.
- Add exclusions for:
  - `C:\Modding\Nuclear Sunset`
  - `C:\Modding\Wabbajack`

	![Exclusions](https://github.com/user-attachments/assets/383f5259-3236-4acb-b00a-ce57e895716e)

- Repeat this process for any third-party antivirus software.

<br></br>
<br></br>

### <p align="center"> ![Downloading Wabbajack](https://github.com/user-attachments/assets/f7f009e8-df47-43b7-847b-7ca2d0dccaa3) </p>

- Download the [Wabbajack Installation file](https://www.wabbajack.org/).
- Move the downloaded file to `C:\Modding\Wabbajack`.
- Rename `Wabbajack.exe` to `Wabbajack Launcher.exe`
- Run `Wabbajack Launcher.exe` to complete the installation.
- Close Wabbajack.

:::warning Version Check
**DO NOT** use pre-existing installations of Wabbajack or pre-existing Wabbajack shortcuts.

Wabbajack should **ONLY** be launched from the `Wabbajack Launcher.exe`.
:::

<br></br>
<br></br>

### <p align="center"> ![Creating Clean Installs and Backups](https://github.com/user-attachments/assets/b1e3bda9-ded4-410e-b34a-fc6e5a849e8e) </p>

:::tip Self-Contained
This is part one of a process that creates a **SELF-CONTAINED** installation that won't interfere with preexisting modded setups.
:::

:::danger
If clean installs are not appropriately created, the Nuclear Sunset installation process will fail. Simply uninstalling the game through Steam/GOG is insufficient.
:::

- Navigate to `C:\[STEAM, GOG, or EPIC FILEPATH]` and:
	- Move the `Fallout New Vegas` folder to the desktop.
	- Delete the `Fallout New Vegas` folder instead if backups are not desired.
	- Delete the `Fallout 3` folder.
- Navigate to `C:\Users\[USERNAME]\Documents\My Games` and:
	- Move the `FalloutNV` folder to the desktop.
	- Delete the `FalloutNV` folder if backups are not desired.
 	- Delete the `Fallout3` folder.
- Open `Steam, GOG, or Epic` and:
	- Uninstall `Fallout: New Vegas` and `Fallout 3` if they are still installed.
 	- Reinstall `Fallout: New Vegas` and `Fallout 3`.

:::tip Default Filepath Locations
The default filepaths for each launcher are as follows:
- Steam: `C:\Program Files\Steam\steamapps\common\[Fallout: New Vegas OR Fallout 3]`
- GOG: `C:\Program Files\GOG Galaxy\Games\[Fallout: New Vegas OR Fallout 3]`
- Epic: `C:\Program Files\Epic Games\[Fallout: New Vegas OR Fallout 3 (please note that these folders are nested within a second Fallout folder)]`

If stuggling to find the correct filepath, `right click` the `Fallout: New Vegas` in the respective launcher and find the appropriate option to view local files.
:::

:::note
These clean installations and backups will be utilized in the [Creating a Clean Stock New Vegas Folder](https://nuclearsunset.com/docs/main/setup#-creating-a-clean-stock-new-vegas-folder-) section.
:::

### <p align="center"> ![Installing Nuclear Sunset](https://github.com/user-attachments/assets/34c624af-f780-4666-987d-41a1359cf77f) </p>
- Launch the `Wabbajack application`.
- Open the `settings` page and log into your Nexus account.

  ![WJLogIn](https://github.com/user-attachments/assets/365c2c63-67a1-48d0-be77-15a4b6dac42f)

- Open the `Browse Lists` page, type `Nuclear Sunset` into the search bar, and click the `Nuclear Sunset modlist` image.

  ![WJBrowse](https://github.com/user-attachments/assets/28d6edf5-a694-4679-9cef-39f79d9e1fef)

- Click `Download & Install`.

  ![WJDownload](https://github.com/user-attachments/assets/c938ea10-d071-480b-ac4e-7b9152777707)

- **COPY** (`Ctrl+C`) `C:\Modding\Nuclear Sunset`, changing the Root Directory if necessary, and **PASTE** (`Ctrl+V`) it into the `Installation Location`.
- `Download Location` will **auto-populate** `C:\Modding\Nuclear Sunset\downloads`.
- Once finished, click `Install`.

  ![WJNSInstall](https://github.com/user-attachments/assets/ac393510-1047-449c-ae8e-5f2d04a90802)

- Begin the installation and accept the `Nexus Mods API request` when prompted.
- If you are not a Nexus Mods premium user, manually click download on each mod.
- When complete, Wabbajack will display `Finished Installing Nuclear Sunset` at the top.
- Close Wabbajack. **DO NOT** select the `Create Desktop Shortcut` option.

:::danger Red `INSTALLATION FAILED` Notification
- Please refer to [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq) for a list of initial troubleshooting steps for common installation errors **PRIOR** to requesting support.
:::

:::warning Reminder
Let the installation **FINISH COMPLETELY** prior to starting the following sections.

**DO NOT** open Mod Organizer 2 **BEFORE** being instructed to do so.
:::

### <p align="center"> ![Creating a Clean Stock New Vegas Folder](https://github.com/user-attachments/assets/01abbcf8-4205-4629-a692-f97596b62d5b) </p>
:::tip Self-Contained
This is part two of a process that creates a **SELF-CONTAINED** installation that won't interfere with preexisting modded setups.
:::

#### Step 1: Creating the Clean Stock New Vegas Folder
- Navigate to the newly **reinstalled** `C:\[STEAM, GOG, or EPIC FILEPATH]\Fallout New Vegas` folder, **COPY** ***ALL*** of the contents (click inside the folder, press `Ctrl+A`, then `Ctrl+C`), and **PASTE** (`Ctrl+V`) them into the `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas` folder.

#### Step 2: Restoring Backups of Current Installs/Modded Instances
:::important
**SKIP** step 2 if **not** backing up another modded instance of Fallout: New Vegas.
:::
- After successfully creating the `Clean Stock New Vegas folder`, restore the files that were previously backed up.
  - If restoring files, create an additional backup of these clean folders for future use, as a clean installation will be required when updating Nuclear Sunset.
  - Move your `Fallout New Vegas` folder from your desktop back into its origin in the `C:\[STEAM, GOG, or EPIC FILEPATH]` folder, selecting `Replace` when prompted.
  - Move your `FalloutNV` folder from your desktop back into its origin in the `C:\Users\[USERNAME]\Documents\My Games` folder, selecting `Replace` when prompted.

:::danger
If a clean `Stock New Vegas` folder is not appropriate created, the game will fail to launch.
:::

### <p align="center"> ![Generating Fresh INI Files](https://github.com/user-attachments/assets/db4eb7b0-0231-4710-9e37-9a806fcaba45) </p>
- Launch Fallout: New Vegas from `Steam/GOG`.
- Click `OK` when prompted with `Detecting Video Hardware`.
- Close the launcher.
- Repeat this process for Fallout 3.

### <p align="center"> ![Launching Mod Organizer 2 (MO2)](https://github.com/user-attachments/assets/b40dea42-3d9b-4de3-9819-91e21eaf7883) </p>
- Launch `ModOrganizer.exe` from `C:\Modding\Nuclear Sunset`.
- If prompted that `FalloutNV_lang.esp` was found, select `Yes`.
- If prompted to `register to handle nxm links`, select `Yes`.

:::tip Epic Game Users
- Open `executable settings` ![352871292-1de0e254-e1a2-4d2a-bac2-df9630e0677b](https://github.com/user-attachments/assets/744ae726-8c62-452c-8bd5-a0f75515d083).
- Select `Nuclear Sunset`, select the `Arguments` box, add `-EpicPortal`, then select `Apply`.

 	![EPIC](https://github.com/user-attachments/assets/63688aa8-afdf-441d-8f0c-45761af92653)
:::

### <p align="center"> ![Configuring Game Settings](https://github.com/user-attachments/assets/a30e31cc-4ca9-436a-8e07-b7ac84798d7b) </p>

- In the top-right corner of MO2, open the drop-down menu labeled `Nuclear Sunset` and select `Configuring Game Settings`.
- Click `Run`.

	![Configuring Game Settings](https://github.com/user-attachments/assets/f36d012c-9100-46d4-aea2-e90ea876b4bb)

- Navigate to `Options` and select the `Ultra` preset.
  
:::tip Detail
- Ultra provides textures at the intended resolution, though for those with performance concerns, lower `Detail` presets will uniformly downsize all of the textures in Nuclear Sunset, which may be beneficial for users with weaker computers.
	- DO NOT use `Low` preset. This setting disables critical rendering functions.

 	![Launcher Presets](https://github.com/user-attachments/assets/ed9051aa-1a8e-4212-afcc-604be9ced244)
:::
 
- Uncheck the `Windowed` option if checked and select your monitor's resolution.
	- If your monitor's resolution is unavailable, manually set it by opening MO2's INI editor, navigating to the `Falloutprefs.ini` tab, and adjusting `iSize W` and `iSize H` under the `Display` section to match your screen's width and height.
- Click `OK` and close the launcher.

	![Game Settings](https://github.com/user-attachments/assets/7b3de77d-03f8-4f86-82b2-8411b5f98dd0)

:::tip Steam Polish-Czech-Russian (PCR) Version
- Open `executable settings` ![352871292-1de0e254-e1a2-4d2a-bac2-df9630e0677b](https://github.com/user-attachments/assets/744ae726-8c62-452c-8bd5-a0f75515d083).
- Select `Configuring Game Settings`, check the `Overwrite Steam AppID` box, enter `22490` in the corresponding field, and click `Apply`.

 	![PCR](https://github.com/user-attachments/assets/2d0ecd75-7a56-4f02-a902-dede6edf5120)
:::

:::danger Configuring Game Settings Crashes
Refer to [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq) for common troubleshooting steps before requesting support.
:::

### <p align="center"> ![Installing Tale of Two Wastelands (TTW)](https://github.com/user-attachments/assets/aedc9b9f-a40d-448f-8f70-0a0b2c1bb9ea) </p>

:::danger Required Mod
:::

- Manual Download [Tale of Two Wastelands](https://mod.pub/ttw/133/files) and extract the archive.
- Open the extracted `Tale of Two Wastelands Installer` folder. Right-click `TTW Install.exe` and select `Run as Administrator`.
- Verify that the `Fallout 3` file path matches your Steam/GOG Fallout 3 installation path (this should already be auto-populated).
- Copy (`Ctrl+C`) `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`, changing the Root Directory path if necessary, and paste (`Ctrl+V`) it into the `Fallout New Vegas` file path.
- Copy (`Ctrl+C`) `C:\Modding\Nuclear Sunset\MODS\[NoDelete] [INF] [DB] - Tale of Two Wastelands (TTW)`, changing the Root Directory path if necessary, and paste (`Ctrl+V`) it into the `Tale of Two Wastelands Installation Path`.

:::danger CRITICAL - Confirm the File Path
- Ensure the installation file path is `C:\Modding\Nuclear Sunset\MODS\[NoDelete] [INF] [DB] - Tale of Two Wastelands (TTW)`. Installing outside of the `MODS` folder will prevent the game from launching.
- Do not create a new TTW folder if you cannot find the existing one. You are likely in the wrong filepath.

	![TTW Confirm](https://github.com/user-attachments/assets/406f597d-562b-407a-83f2-0d12873ae87c)
:::

- Click `Install`.
- Once the installation is complete and the confirmation screen appears, close the installer.

	![TTWComplete](https://github.com/user-attachments/assets/c99bd84b-0b28-4d45-a631-8b302cba49fb)

- Manual Download [YUPTTW](https://mod.pub/ttw/133/files) and extract the archive contents into `C:\Modding\Nuclear Sunset\MODS\[NoDelete] [INF] [DB] - YUPTTW Hotfix`

:::tip Double Check
Navigate to `C:\Modding\Nuclear Sunset\mods`, right-click the `[NoDelete] [INF] [DB] - Tale of Two Wastelands (TTW)` folder, select `Properties`, and verify that the folder size is exactly 17GB.

If not, delete the `[NoDelete] [INF] [DB] - Tale of Two Wastelands (TTW)` and `[NoDelete] Stock New Vegas` folders, then repeat the steps starting from [Creating Clean Installs and Backups](https://nuclearsunset.com/docs/main/setup#-creating-clean-installs-and-backups-).
:::

:::warning
The TTW Installer **MUST** run on the copy of Fallout: New Vegas inside the `[NoDelete] Stock New Vegas` folder. A prior TTW installation **CANNOT** be moved into the Nuclear Sunset TTW mod folder. The TTW installation process performs BSA decompression, binary patching, and sound file extension alterations, which are critical for a functional installation.
:::

### <p align="center"> ![Running 4GB Patcher](https://github.com/user-attachments/assets/1266e5e4-495f-438d-bcda-6bcaa2465c19) </p>
- Navigate to `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas` and run `Patcher - GOG & Steam.exe` or `Patcher - Epic.exe` depending on your game version.
- A CMD prompt popup will appear, confirming `FalloutNV.exe patched!` or `Press any key to continue...` depending on your game version. `FalloutNV_backup.exe` will also appear in the `[NoDelete] Stock New Vegas` folder.

:::danger
Failure to run the 4GB Patch will result in a pink screen or crash when launching the game.
:::

### <p align="center"> ![Installing on Linux](https://github.com/user-attachments/assets/7b47c7e4-90d9-4d60-a29c-3d8b8aea5af6) </p>
<details><summary>
Expand - Linux Installation Instructions
</summary>

Linux inherently requires above average operating system knowledge and troubleshooting capability. As such, support **WILL NOT** be provided for the Linux installation process.

- **Requirements**:
  - Pending revision, sorry!

- **Instructions**:
  - Pending revision, sorry!
</details>

### <p align="center"> ![Disabling Base Address Randomization](https://github.com/user-attachments/assets/0685f415-9655-461e-9a58-5cc843299659) </p>
:::tip Why?
This step can prevent unforeseen crashes.
:::

- Open `Windows Security` from the `Start Menu`.
- Open `App & Browser Control` from the left sidebar.
- Open `Exploit Protection Settings` under `Exploit Protection`.
- Set `Force Randomization for Images (Mandatory ASLR)` to `Use Default (Off)`.

  ![Base Address](https://github.com/user-attachments/assets/3a1fcb3d-8bee-4aa6-a394-ece70234160a)

### <p align="center"> ![Disabling DXVK Cache Storage](https://github.com/user-attachments/assets/2cc79209-9690-4c95-9cc0-e9c83d6927df) </p>
:::tip Why?
Disabling DXVK Cache Storage prevents memory-related crashes by halting the creation of the DXVK cache.
:::

- Press the `Windows` button.
- Search for `Env`, then select `Edit the system environmental variables`.
- In the dialog box, click `Environmental Variables`.
- Under `User variables for USER NAME`, click `New`.
- Enter `DXVK_STATE_CACHE` in the `Variable name` field.
- Enter `disable` in the `Variable value` field.
- Click `OK` and exit the `Environmental Variables` window.

  ![Cache](https://github.com/user-attachments/assets/6bb4cd54-1c6f-4e91-b3ff-006cd95576f7)

- Delete any existing DXVK Cache:
  - **Steam Users**:
    - Navigate to `Steam > steamapps > shadercache > 2490` and delete `DXVK_STATE_CACHE` if it exists.
  - **GOG Users**:
    - Navigate to `Nuclear Sunset > [NoDelete] Stock New Vegas > FalloutNV.dxvk-cache` and delete `DXVK_STATE_CACHE` if it exists.

- Restart your computer for changes to take effect.

### <p align="center"> ![Installing RivaTuner Statistics Server (RTSS)](https://github.com/user-attachments/assets/f83c6525-1de0-415e-bf59-88d03053bf07) </p>
:::tip Why?
FPS limiters make the game smoother by reducing rapid FPS fluctuations and preventing timescale desync bugs.
:::

- Navigate to `Nuclear Sunset > xRivaTuner Statistics Server > RivaTuner Statistics Server` and run `RTSS.exe`.
- The RTSS logo will now be visible in the system tray and will auto-launch when starting Windows. If this is not visible in the systems tray, repeat the above step.

  ![RTSS Tray](https://github.com/user-attachments/assets/219b7842-12c1-4eb6-9fae-7badeaea22d3)

:::danger Exceeding a Framerate Limit of 59.95
- Exceeding this value, even on powerful machines, can result in significantly increased stuttering. Exceeding 120 can result in timesync abnormalities.
- RTSS is autoconfigured in Nuclear Sunset, though those who wish to increase this can do so by selecting `FalloutNV.exe` and adjusting the `Framerate limit`.
	- The absolute maximum value is 119.95, and it is highly likely that increasing to this value will increase in-game stutter.

![RTSS](https://github.com/user-attachments/assets/cb6a8927-3ad8-4f24-816c-fa4ea8f4213b)
:::warning
Force close RTSS from task manager before updating the list! This is known to cause issues with launching from MO2 if RTSS is open when updating the list.
:::

### <p align="center"> ![Nvidia Users - Applying Nvidia Profile](https://github.com/user-attachments/assets/4fbc4f77-c103-47e5-8bbd-9136172710c7) </p>
:::tip Why?
Enabling Flip Model (DXVK with DXGI) reduces latency and supports HDR and VRR.
:::

- Navigate to `Nuclear Sunset > xNVIDIA Utilities`.
- Run `nvidiaProfileInspector.exe`, click `Import user defined profiles`, then select `Import Profiles`.

  ![Import Nvidia Profile](https://github.com/user-attachments/assets/976cfd96-b6ff-4c95-ac87-2b888c2dbaa2)

- In `Nuclear Sunset > xNVIDIA Utilities`, select `[#] [INF] - FNV-NvidiaProfile.nip`, then click `Open`.

  ![NVIDIA Profile Select](https://github.com/user-attachments/assets/9b638df0-8506-4ee1-9ae2-db72be80f99d)

- Click `OK` on the `Profile Successfully Imported!` prompt.

  ![Nvidia Successfully Imported](https://github.com/user-attachments/assets/178cdbc0-cdf1-499c-bd7d-77aecc973e41)

- Click `Apply Changes`, then close the program.

  ![Apply Nvidia Profile](https://github.com/user-attachments/assets/3cf964e6-fb5d-4407-a0dc-16d0f45b90b7)

:::warning Driver Updates
Repeat this process after every Nvidia driver update.
:::

- Disable the `NVIDIA overlay` in the NVIDIA app settings, as it can reduce performance.

  ![NVIDIA Overlay](https://github.com/user-attachments/assets/284d36b6-6f22-4346-b93f-7e1b2edce48b)

### <p align="center"> ![AMD Users - Disabling Ultra-Low Power State (ULPS)](https://github.com/user-attachments/assets/01ecc185-8433-4510-9db4-3a3e5d516480) </p>
:::tip Why?
The Ultra-Low Power State (ULPS) setting is enabled by default on AMD GPUs and has been associated with significant performance impact.
:::

- Download [MSI Afterburner](https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1749546321~acl=/*~hmac=23e15a4588ad2bbcf279cd596b33c6b1dc5a2d193ff9a50a4b2ad66d00a7ad15) and run `MSIAfterburnerInstaller465.exe`.
- Disable `Norton 360 for Gamer`, press `Install`, then unselect `RivaTuner Statistics Server` when prompted.

	![MSIAfterBurner Install](https://github.com/user-attachments/assets/76b2246c-3cef-4a72-abf3-df000e270814)

	![RTSS No](https://github.com/user-attachments/assets/06e72450-36db-4bfc-aefd-e69f071ed8fa)

- Open the `Settings` cogwheel, enabled `Disable ULPS`, click `Apply`, then `ok`.

	![MSI Afterburner 1](https://github.com/user-attachments/assets/8b7fa6e8-be93-4807-8df1-c3eb400076a7)
	![MSI Afterburner 2](https://github.com/user-attachments/assets/cb6278f0-94b4-4d9a-8ae6-6d43bb28b23d)

- Restart your compute for the changes to take effect.

### <p align="center"> ![Selecting a Nuclear Sunset Profile](https://github.com/user-attachments/assets/9dc22271-8ba5-4025-8171-1ab0260cd69f) </p>

- In MO2, select `Nuclear Sunset` from the dropdown menu, then choose a profile.

  ![NS Profile](https://github.com/user-attachments/assets/18d341e3-7c9d-49eb-b770-ca2ed36ea3c9)
 
  - **Ultra Quality Profile**:
  	- Enables all mods and settings.
  - **High Quality Profile**:
  	- Disables and tweaks several performance-intensive New Vegas Reloaded settings (e.g., disables terrain parallax and wetworld shaders. Reduces the quality of shadow shaders).
  - **Standard Quality Profile**:
  	- Disables and tweaks several performance-intensive New Vegas Reloaded settings (e.g., disables shadow, terrain, godray, and wetworld shaders).
  - **Low Quality Profile**:
  	- Disables New Vegas Reloaded, Uranium Haze, and Real Time Reflections.
  - **Very Low Quality Profile**:
  	- Disables New Vegas Reloaded, Uranium Haze, and additional effect and lighting mods (e.g., disables Radiation Visuals, Real Time Reflections, Lumen, and Vending Machine Flicker Emits Light).
  - **Unloaded Profile**:
  	- Reduces texture resolution dramatically to mimic the aesthetic of older 8-bit games. This profile **WILL NOT** provide additional performance benefits. 
  - **Debugging Profile**:
  	- Minimal load order, only essential mods enabled.

:::tip Swapping profiles
When swapping profiles, the same save can be used safely. Experiment and find out what profile works best for you!

If performance remains a concern despite changing profiles, try the recommendations listed in the `FPS/Stutter - How can I increase FPS/Reduce Stutter in Nuclear Sunset?` section of the [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq).
:::
 
### <p align="center"> ![Optional Mods](https://github.com/user-attachments/assets/ac08818b-a893-4d46-aa3f-77f40e0e3453) </p>

- Various optional mods with associated descriptions are bundled that the user can enable or disable without voiding support.
	- When enabling or disabling an optional mod, ensure that **all other mods sharing the root name** are also enabled or disabled.
 	- These will need to be re-configured with each update.
 
  ![OptionalSeparators](https://github.com/user-attachments/assets/976d0ff7-c70e-435f-83b7-fe3939ac1cfc)

<details><summary>
Expand - Optional Mod Descriptions
</summary>

- **Optional Mods - Gameplay:**
	- **Auto-Equip Weapon if Unarmed** - Auto-equips weapons that are picked up while unarmed. May be desirable to disable for unarmed character builds.
 	- **Helmet Overlay** - Adds helmet-specific overlays and associated animations to the screen.
  	- **Minigames - Wordle Hack** - Replaces the hacking minigame with Wordle.
  	- **Minigames - Immersive Minigames** - A player skill-based alternative to the standard minigames.
	- **Mod Delivery** - Commission weapon mods for your equipped weapon from vendors. For further details on utilization, visit the [Mod Feature Reference List](https://nuclearsunset.com/docs/main/reference). Disabled by default because it is egregiously underutilized by users that are unaware of the associated functions.
	- **Quick Start & Associated Addons - Nuclear Sunset Merge** - A merge of quick-start related mods. May be disabled by those who want to experience the Fallout 3 introduction sequence.

- **Optional Mods - Balance:**
  	- **Fast Travel Expenses** - Adds a distance-based cost when fast traveling. Highly recommended to keep enabled for appropriate balance.
  	- **Life After Death** - Adds punishments to death and reloads to prevent abuse of the save reload cycle. Highly recommended to keep enabled for appropriate balance.
  	- **Permadeath** - Enables permadeath mode, in which the player only has a finite number of lives.
  	  
- **Optional Mods - Difficulty Presets:**
	- **Nuclear Sunset Hardercore** - Various settings that dramatically increase the difficulty of Nuclear Sunset. The mod includes the following changes:
		- One perk is gained every 3 levels.
		- No perks are gained after being humbled (first time travel between wastelands) until the player reaches their pre-humbled level.
		- 2 Less skill points are gained per level.
		- 3 Less SPECIAL points to allocate when creating a character.
		- Max of 5 traits can be selected when creating a character (Wild Wasteland is free).
		- Hardcore need accumulation rate is doubled.
		- Overencumbrance has a much more dramatic impact on movement speed.
		- Sleeping will restore a much smaller amount of health. 
		- Radiation resist effects are reduced by 50% unanimously.
		- One follower can now be recruited at five permanent charisma, and two followers can be recruited at ten charisma.
		- Pip-boy can no longer be used in combat.
		- Time dilation is halved when using quick select menus.
		- Weapon sway is increased when not meeting weapon requirements.
		- Forced entry settings are more likely to break items in containers and door locks have more health.
		- The Long Haul perk has been disabled, meaning the player can no longer fast travel when over encumbered.
		- Locks and Terminals have a random chance to be a higher lock level.
		- Higher level enemies will appear earlier 
 	- **Nuclear Sunset Softercore** - Various settings that dramatically reduce the difficulty of Nuclear Sunset. The mod includes the following changes:
		- Hardcore needs accumulation rate is 33% of the base list.
		- Weapon requirement penalties are reduced.
		- Reduced lockpicking difficulty when unlocking locks that are higher level than the player.
		- Terminal shock punishment when failing to hack a terminal is reduced.
		- The radius of irradiated locations is reduced.
		- Increases the material used by the Ammo Press and reduces the cooldown.
		- Difficulty starts at normal but can be changed to Easy or Very Easy.
		- Caps have no weight
    
- **Optional - Settings:**
	- **Keybinds - F Activates, Q & E Lean** - Swaps the activate key to F and enables manual leaning on the Q and E keys.
 	- **Sound - Nuclear Sunset Main Menu Music** - Nuclear Sunset specific menu music.
	- **Tutorial - Nuclear Sunset Tutorial** - A Nuclear Sunset specific tutorial.
	- **UI - 16-10 Aspect Ratio Monitor Support** - Enables support for 16:10 monitors.
	- **UI - 21-9 Aspect Ratio Monitor (Ultrawide) Support** - Enables support for ultrawide (21:9) monitors.
	- **UI - 32-9 Aspect Ratio Monitor (Super Ultrawide) Support** - Enables support for super ultrawide (32:9) monitors.
</details>

### <p align="center"> ![Launching The Game](https://github.com/user-attachments/assets/3af8373b-7ec0-433a-8279-7dbf6d1c7bbd) </p>

- Launch the game via MO2. Launching from Steam, GOG, or the Nuclear Sunset Launcher will **NOT** launch the game with Nuclear Sunset enabled.
- If prompted that INIs are read-only, select `Clear the Read Only Flag`.
- If launching results in the game launcher opening instead of Nuclear Sunset opening, repeat the [Configuring Game Settings](https://nuclearsunset.com/docs/main/setup#-configuring-game-settings-) steps.
- After starting a new game, press `K` in the pause menu to view `Keybinds and Legend`. For more details, see the [Mod Feature Reference List](https://nuclearsunset.com/docs/main/reference).

	![Launch](https://github.com/user-attachments/assets/19f3bba6-965f-4df7-9adc-571ff33b3893)

:::danger Launch Abnormalities
- Launch Crashes:
	- Overwolf is incompatible and will cause a launch crash.
	- For other sources of launch crashes, refer to [Frequently Asked Questions](https://nuclearsunset.com/docs/main/faq) for troubleshooting steps before requesting support.
- Unmodded Fallout: New Vegas launches:
	- Re-run the [Nuclear Sunset Wabbajack Installer](https://nuclearsunset.com/docs/main/setup#-installing-nuclear-sunset-). This will repair any incorrect filepaths.
 	- DO NOT select `Play` from the game launcher. If this menu opens, repeat the [Configuring Game Settings](https://nuclearsunset.com/docs/main/setup#-configuring-game-settings-) steps.
    
    ![NoPlay](https://github.com/user-attachments/assets/dd3d35e5-6461-444e-a8aa-dfbe8b87413d)
:::

### <p align="center"> ![Modders - Installing Geck](https://github.com/user-attachments/assets/e8904e66-cbe6-4563-9bd0-0bd6379a0bbc) </p>
:::tip Authors Only
This step is only necessary for mod authors.
:::

- Steam users:
	- Navigate to Steam and install `GECK - New Vegas Edition`.
 	- Navigate to `C:\[STEAM FILEPATH]\Fallout New Vegas` and move `SSCE5432.dll` into `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`.
 	- Move `GECK.exe` from `C:\Modding\Nuclear Sunset` into `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`.
  
- GOG users:
	- Move `GECK.exe` from `C:\Modding\Nuclear Sunset` into `C:\Modding\Nuclear Sunset\[NoDelete] Stock New Vegas`, selecting `Replace` when prompted.

### <p align="center"> ![Controller Users](https://github.com/user-attachments/assets/bbeed182-b2f9-4bbf-9335-76cd665fb85b) </p>
:::tip For Contoller Users Only

Please follow **ALL** instructions on the **[Controller Instructions](https://nuclearsunset.com/docs/main/controller) page**.
