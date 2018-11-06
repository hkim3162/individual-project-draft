require 'pry'
class V1::PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :update, :destroy]
  include Response
  
  # GET /photos
  def index 
    @photos = Photo.all
    render json: @photos, status: :ok
  end
  
  # POST /photos
  def create
    @photo = Photo.new(validate_photo_params)
    @photo.save
    render json: @photo, status: :created
  end

  #GET /photos
  def show
    json_response(@photo)
  end

  # PUT /wines/:id
  def update

    @Photo.update(validate_photo_params)
    head :no_content
  end

  # DELETE /photos/:id
  def destroy
    if @contact.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def validate_photo_params
    params.permit(:url, :description, :date, :category, :client)
  end

  def set_photo
    @photo = Photo.find(params[:id])
  end
end
