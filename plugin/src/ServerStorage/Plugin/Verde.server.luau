--[[
	Verde - Roblox Studio Plugin
	Companion plugin for the Verde VSCode extension.

	Dvitash 1/4/2026
--]]

local RunService = game:GetService("RunService")

local Verde = script.Parent

if RunService:IsRunning() then
	return
end

local StateController = require(script.Parent.States.StateController)
local PluginButtonFactory = require(Verde.Shared.PluginButton)
local ButtonInstance = require(Verde.Shared.ButtonInstance)
local SoundPlayer = require(Verde.Shared.SoundPlayer)

SoundPlayer.Init(plugin)

local connectButton = PluginButtonFactory(plugin)
ButtonInstance.button = connectButton

connectButton.Click:Connect(function()
	local currentStateName = StateController.GetState()

	if not currentStateName or currentStateName == "Connected" or currentStateName == "Connecting" then
		StateController.SwitchState("Disconnected")
	else
		StateController.SwitchState("Connecting")
	end
end)

plugin.Unloading:Connect(function()
	StateController.SwitchState("Disconnected")
	SoundPlayer.cleanup()
end)

StateController.SwitchState("Connecting")
