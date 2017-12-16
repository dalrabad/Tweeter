class Api::BiosController < ApplicationController
  def index
    render json: current_user.bio
  end

  def create
    binding.pry
    bio = current_user.create_bio(bios_params)
    if bio.save 
      reder json: bio
    else
      render json: {message: "didn't create"}
    end 

  end

  def update
    bio = current_user.bio
    bio.update_attributes(bios_params)
    render json: bio
  end

  def delete
    Bio.find(params[:id]).destory 
    render json: {message: "deleted"}
  end

  private 

    def bios_params
      params.require(:bio).permit(:body)

    end 
end
