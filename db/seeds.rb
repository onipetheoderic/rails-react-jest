3.times do |i|
    Task.create(
      description: Faker::Lorem.paragraph,
      checked: true,
      time: "11:11 am",
    )
end


3.times do |i|
    Task.create(
      description: Faker::Lorem.paragraph
    )
end
  