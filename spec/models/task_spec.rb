require 'rails_helper'

RSpec.describe Task do
    test_task = FactoryBot.create(:task, description:"test description")

    it "returns a task object with description, created at time, and updated at time" do
        expect(test_task.description).to eq("test description")
        expect(test_task.created_at).not_to be_nil
        expect(test_task.updated_at).not_to be_nil
        expect(test_task.avatar).not_to be_nil
    end

    it "is valid with valid attributes" do
        expect(test_task).to be_valid
    end

    it "is valid without the avatar field" do
        test_task.avatar = nil
        expect(test_task).to be_valid
    end

    it "is not valid without a description" do
        test_task.description = nil
        expect(test_task).to_not be_valid
    end

    it { should validate_presence_of(:description) }
end