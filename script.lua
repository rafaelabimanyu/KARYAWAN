local Part = script.Parent

Part.Touched:Connect(function(hie)
    if hie.Parent:FindFirstChild("Humanoid") then
        hie.Parent.Humanoid.Health = 0
    end
end)
